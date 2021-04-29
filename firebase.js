import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGQjbDfVfxw-cNQeWy7T4Yv4TElU6--K0",
    authDomain: "twitter-clone-2f520.firebaseapp.com",
    projectId: "twitter-clone-2f520",
    storageBucket: "twitter-clone-2f520.appspot.com",
    messagingSenderId: "436654171287",
    appId: "1:436654171287:web:1148f69e8a99819e2cf5d2",
    measurementId: "G-D23XXEHNPL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;