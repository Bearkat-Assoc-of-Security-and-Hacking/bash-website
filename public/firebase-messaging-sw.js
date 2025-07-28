// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js"
); // Use the latest version if updated
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js"
);

// Hardcode public config here (safe for service workers)
firebase.initializeApp({
  apiKey: "AIzaSyALjpFIYwua8mwGSo3xuMApBwQFlr5dnVk",
  authDomain: "bash-website-backend.firebaseapp.com",
  projectId: "bash-website-backend",
  storageBucket: "bash-website-backend.firebasestorage.app",
  messagingSenderId: "644987403584",
  appId: "1:644987403584:web:e19fb9e0c78e7a51b60ea5",
  measurementId: "G-0KF6LMQ9N1",
});

const messaging = firebase.messaging();

// Handle background messages (optional but useful for announcements when site is closed)
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title || "BASH Announcement";
  const notificationOptions = {
    body: payload.notification.body || "New update from the club!",
    icon: "/bash-logo-nobg.png", // Use your club logo for branding
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
