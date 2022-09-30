import firebase from "firebase";

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQk9KGxzpzjQnf-0vgT0G3NA8C7hHP-Ck",
  authDomain: "colet-main.firebaseapp.com",
  projectId: "colet-main",
  storageBucket: "colet-main.appspot.com",
  messagingSenderId: "534699461756",
  appId: "1:534699461756:web:0856f75ae95d14c8064df9",
  measurementId: "G-PRLMBVGFYT"
})

const auth = firebase.auth();

export { auth };