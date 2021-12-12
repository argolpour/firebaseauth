// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCYtiBKrpJtbci_DYMLF82hMvKwUNHA4c",
  authDomain: "authtest-883fd.firebaseapp.com",
  projectId: "authtest-883fd",
  storageBucket: "authtest-883fd.appspot.com",
  messagingSenderId: "262164879633",
  appId: "1:262164879633:web:6b1a9a00f88b935f3394b0",
  measurementId: "G-CQTCV3WEJN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export  const auth = getAuth();




export default app 