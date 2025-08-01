// /functions/index.js

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

// Initialize the app only once
if (!admin.apps.length) {
  admin.initializeApp();
}

/**
 * Sends a push notification announcement to all registered devices.
 * This is a secure function that requires the caller to be authenticated.
 */
exports.sendAnnouncement = onCall(async (request) => {
  // Security check: Ensure the caller is a signed-in user.
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "This function can only be called by an authenticated user."
    );
  }

  const { title, body } = request.data;
  const db = admin.firestore();

  try {
    // Use a collectionGroup query to get all 'fcm-tokens' collections
    const snapshot = await db.collectionGroup("fcm-tokens").get();

    if (snapshot.empty) {
      return { success: true, message: "No subscribers found." };
    }

    // Extract the token strings from the document IDs
    const tokens = snapshot.docs.map((doc) => doc.id);

    const message = {
      notification: {
        title: title || "BASH Cyber Club Update",
        body: body || "Check the site for details!",
      },
      tokens,
    };

    const response = await admin.messaging().sendMulticast(message);
    console.log("Successfully sent to", response.successCount, "devices");

    // Automatic Cleanup: Find and delete any tokens that are no longer valid.
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
      const deletePromises = [];
      const invalidTokenDocs = await db
        .collectionGroup("fcm-tokens")
        .where(admin.firestore.FieldPath.documentId(), "in", tokensToDelete)
        .get();
      invalidTokenDocs.forEach((doc) => {
        deletePromises.push(doc.ref.delete());
      });
      await Promise.all(deletePromises);
      console.log(`Deleted ${tokensToDelete.length} invalid tokens.`);
    }

    return {
      success: true,
      successCount: response.successCount,
      failureCount: response.failureCount,
    };
  } catch (err) {
    console.error("Send error:", err);
    throw new HttpsError("internal", "Failed to send announcement.");
  }
});
