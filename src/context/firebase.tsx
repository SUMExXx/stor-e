import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKJfaQYMAebOrrhm0xWpXcs_qJlDKxJjw",
  authDomain: "stor-e-by-ecell.firebaseapp.com",
  projectId: "stor-e-by-ecell",
  storageBucket: "stor-e-by-ecell.appspot.com",
  messagingSenderId: "18033171659",
  appId: "1:18033171659:web:9d3789e81f1fc726dd8f4e",
  measurementId: "G-LKBPWWZPJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);