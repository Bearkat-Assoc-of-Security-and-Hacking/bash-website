// /lib/server/firebaseAdmin.js
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

export function initializeAdminApp() {
  if (getApps().length) {
    return;
  }

  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
