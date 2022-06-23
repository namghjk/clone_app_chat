import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZwllq8XPAM-OUgkOMLH4Wgre_R-EUkNk",
  authDomain: "clone-app-chat.firebaseapp.com",
  projectId: "clone-app-chat",
  storageBucket: "clone-app-chat.appspot.com",
  messagingSenderId: "755394921424",
  appId: "1:755394921424:web:be57463997929d5b5dafd5",
  measurementId: "G-N1ZFCLCJ74",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
