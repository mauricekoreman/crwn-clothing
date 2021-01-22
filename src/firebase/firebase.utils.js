import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArIkIS5rtuCyY32ir86EZvrqqpfASoe5E",
  authDomain: "crwn-db-2ab3c.firebaseapp.com",
  projectId: "crwn-db-2ab3c",
  storageBucket: "crwn-db-2ab3c.appspot.com",
  messagingSenderId: "295811102058",
  appId: "1:295811102058:web:e3e240ceb3ea27bd662113",
  measurementId: "G-SZZ2F7PPR8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
