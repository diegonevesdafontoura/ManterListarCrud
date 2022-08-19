// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyC5PpsbnndLOEgEuJv0tnPCCBrAHycaX6k",

  authDomain: "exemplo-video-11aa2.firebaseapp.com",

  projectId: "exemplo-video-11aa2",

  storageBucket: "exemplo-video-11aa2.appspot.com",

  messagingSenderId: "1072364039124",

  appId: "1:1072364039124:web:5aade8996a5df8fd1cc441"


};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };