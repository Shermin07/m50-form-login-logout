// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcexsQexBf50Qo2z2FlQGyxVKLBMPAw_0",
  authDomain: "m50-form-login-logout.firebaseapp.com",
  projectId: "m50-form-login-logout",
  storageBucket: "m50-form-login-logout.appspot.com",
  messagingSenderId: "50607241899",
  appId: "1:50607241899:web:2f511fce476df0fde215ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth ;