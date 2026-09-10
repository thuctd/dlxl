/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAyNRizL23YnWzyC0zg5wHxCiPNFBVXxeY",
  authDomain: "4la.vn",
  databaseURL: "https://dlxl7-244709.firebaseio.com",
  projectId: "dlxl7-244709",
  storageBucket: "dlxl7-244709.appspot.com",
  messagingSenderId: "449479196172",
  appId: "1:449479196172:web:ace8b8d18a1febe9b7b829",
  measurementId: "G-QPDB9NCGW9"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Nhận được tin nhắn (Background): ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-72x72.png' // Đường dẫn icon của bạn
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
