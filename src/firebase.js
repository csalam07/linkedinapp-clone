import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdjiAJb5YFU5phxCgCzgEKqV3QPxKF2IE",
  authDomain: "linkedinapp-clone.firebaseapp.com",
  projectId: "linkedinapp-clone",
  storageBucket: "linkedinapp-clone.appspot.com",
  messagingSenderId: "529731241126",
  appId: "1:529731241126:web:31e706a214e1b6f605e067",
  measurementId: "G-VS4560XYTX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };