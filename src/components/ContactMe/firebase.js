import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB87gfHAHrmzEWIFwwJk_FrXZkWhrx7IdM",
  authDomain: "immanual-portfolio.firebaseapp.com",
  projectId: "immanual-portfolio",
  storageBucket: "immanual-portfolio.appspot.com",
  messagingSenderId: "964967332701",
  appId: "1:964967332701:web:fd489cb1fb282c97fb86b4"
});

var db = firebaseApp.firestore();

export {db};