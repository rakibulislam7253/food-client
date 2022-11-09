// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBli44ccVjoKDXxAMjS1CXvAcnnqO_GOBA",
  authDomain: "food-client-5f064.firebaseapp.com",
  projectId: "food-client-5f064",
  storageBucket: "food-client-5f064.appspot.com",
  messagingSenderId: "719027331830",
  appId: "1:719027331830:web:2dae1da3f4537d7b8e42d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;