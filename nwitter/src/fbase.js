import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBtoBVGvNdY_OcnuPGII9xc2AiZEUsdAOk",
    authDomain: "nwitter-f0cad.firebaseapp.com",
    projectId: "nwitter-f0cad",
    storageBucket: "nwitter-f0cad.appspot.com",
    messagingSenderId: "392370722446",
    appId: "1:392370722446:web:3cf93474f34a1b148e5bdf",
    measurementId: "G-846MLMB6HR"
  };

  export default firebase.initializeApp(firebaseConfig);
  export const firebaseInstance = firebase;

  export const authService = firebase.auth();