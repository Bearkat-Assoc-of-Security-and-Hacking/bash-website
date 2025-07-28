// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendAnnouncement = functions.https.onCall(async (data, context) => {
  // Optional: Restrict to authenticated admins (add Firebase Auth to your site if needed)
  // if (!context.auth) {
  //   return { error: "Unauthorized - Admin only" };
  // }

  const { title, body } = data;

  try {
    const snapshot = await admin.firestore().collection("fcm-tokens").get();
    const tokens = snapshot.docs.map((doc) => doc.data().token);

    if (tokens.length === 0) {
      return { error: "No subscribers found" };
    }

    const message = {
      notification: {
        title: title || "BASH Cyber Club Update",
        body: body || "Check the site for details!",
      },
      tokens,
    };

    const response = await admin.messaging().sendMulticast(message);
    console.log("Successfully sent to", response.successCount, "devices");

    return {
      success: true,
      successCount: response.successCount,
      failureCount: response.failureCount,
    };
  } catch (err) {
    console.error("Send error:", err);
    return { error: err.message || "Failed to send announcement" };
  }
});
