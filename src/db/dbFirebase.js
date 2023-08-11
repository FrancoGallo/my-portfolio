// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwba5EQl1bTxueVxUmTQazvSuoXanWpAY",
  authDomain: "my-portfolio-841cd.firebaseapp.com",
  projectId: "my-portfolio-841cd",
  storageBucket: "my-portfolio-841cd.appspot.com",
  messagingSenderId: "541547723881",
  appId: "1:541547723881:web:0fc71dc1703300848af6f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return (app)
}