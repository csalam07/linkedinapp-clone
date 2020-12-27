import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcrH9W7mAucuhpaIyF74_X_Qz3QLccHjw",
  authDomain: "linkedin-appx.firebaseapp.com",
  projectId: "linkedin-appx",
  storageBucket: "linkedin-appx.appspot.com",
  messagingSenderId: "887307284457",
  appId: "1:887307284457:web:6dec622a0f2165f6c8e578",
  measurementId: "G-1QQNJQG54X"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };