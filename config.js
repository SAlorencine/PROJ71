import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyB5MV6a2ftHOsysBj6mWh90dHaNMZKtOps",
    authDomain: "pro71-3d658.firebaseapp.com",
    projectId: "pro71-3d658",
    storageBucket: "pro71-3d658.appspot.com",
    messagingSenderId: "28804814251",
    appId: "1:28804814251:web:7402ab50fb514b058baeee"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
