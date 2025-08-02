// functions/index.js
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

/**
 * Sends a push notification announcement to all registered devices.
 * Requires authentication.
 */
exports.sendAnnouncement = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }
  const { title, body } = request.data;
  const db = admin.firestore();
  try {
    const snapshot = await db.collectionGroup("fcm-tokens").get();
    if (snapshot.empty) {
      return { success: true, message: "No subscribers found." };
    }
    const tokens = snapshot.docs.map((doc) => doc.id);
    const message = {
      notification: {
        title: title || "BASH Cyber Club Update",
        body: body || "Check the site for details!",
      },
      tokens,
    };
    const response = await admin.messaging().sendMulticast(message);
    functions.logger.info(
      `Successfully sent to ${response.successCount} devices`
    );

    const tokensToDelete = [];
    response.responses.forEach((result, index) => {
      const error = result.error;
      if (
        error &&
        error.code === "messaging/registration-token-not-registered"
      ) {
        tokensToDelete.push(tokens[index]);
      }
    });
    if (tokensToDelete.length > 0) {
      const batchSize = 30;
      for (let i = 0; i < tokensToDelete.length; i += batchSize) {
        const batchTokens = tokensToDelete.slice(i, i + batchSize);
        const invalidTokenDocs = await db
          .collectionGroup("fcm-tokens")
          .where(admin.firestore.FieldPath.documentId(), "in", batchTokens)
          .get();
        const deletePromises = [];
        invalidTokenDocs.forEach((doc) => {
          deletePromises.push(doc.ref.delete());
        });
        await Promise.all(deletePromises);
      }
      functions.logger.info(`Deleted ${tokensToDelete.length} invalid tokens.`);
    }
    return {
      success: true,
      successCount: response.successCount,
      failureCount: response.failureCount,
    };
  } catch (err) {
    functions.logger.error("Send error:", err);
    throw new HttpsError("internal", "Failed to send announcement.");
  }
});

/**
 * Registers an FCM token for a user.
 * Requires authentication via Firebase ID token.
 */
exports.signupFcm = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }

  const { token } = request.data;
  if (!token) {
    throw new HttpsError("invalid-argument", "FCM token required");
  }

  try {
    const userId = request.auth.uid;
    const db = admin.firestore();
    const userFcmRef = db
      .collection("users")
      .doc(userId)
      .collection("fcm-tokens")
      .doc(token);
    await userFcmRef.set({ signedUpAt: new Date() });

    return { success: true };
  } catch (error) {
    functions.logger.error("Error registering FCM token:", error);
    throw new HttpsError("internal", "Failed to register FCM token");
  }
});
