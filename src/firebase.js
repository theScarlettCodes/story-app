import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPCUKlwUdXcNnNV-VecRFR0V-8P7MED7s",
  authDomain: "story-react-app.firebaseapp.com",
  projectId: "story-react-app",
  storageBucket: "story-react-app.appspot.com",
  messagingSenderId: "906936471576",
  appId: "1:906936471576:web:b0aa27f3604f82f8eb736d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
