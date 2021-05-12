import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnJUUOefaqT05ccFFNWfBhaeaIkqVE-jM",
  authDomain: "sofa-app-5c407.firebaseapp.com",
  projectId: "sofa-app-5c407",
  storageBucket: "sofa-app-5c407.appspot.com",
  messagingSenderId: "475598534813",
  appId: "1:475598534813:web:85511dae761c7d40cc3c74",
  measurementId: "G-N2TM3QVQCP",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
