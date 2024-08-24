// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5zHOFlWSZhZVJfTI1bFSQUQ0QnKgHgTU",
  authDomain: "hrms-9c406.firebaseapp.com",
  databaseURL: "https://hrms-9c406-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hrms-9c406",
  storageBucket: "hrms-9c406.appspot.com",
  messagingSenderId: "473081956259",
  appId: "1:473081956259:web:6e7e63372009ae21c2bc16",
  measurementId: "G-5942P00L1D"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export  const analytics = getAnalytics(app);


