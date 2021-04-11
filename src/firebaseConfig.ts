import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth()
export const googleAuthProvider = Providers.google
export const firestore = firebase.firestore()
export default Firebase