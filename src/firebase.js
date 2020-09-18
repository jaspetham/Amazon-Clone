import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzHjH7cN8jfq4BWAKWgRgd7j0hIGsCK-4",
  authDomain: "challenge-4d052.firebaseapp.com",
  databaseURL: "https://challenge-4d052.firebaseio.com",
  projectId: "challenge-4d052",
  storageBucket: "challenge-4d052.appspot.com",
  messagingSenderId: "542886874138",
  appId: "1:542886874138:web:29f05b9ea3284d6ac455a3",
  measurementId: "G-Z92W0S8NT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
