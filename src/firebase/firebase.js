// Import the functions you need from the SDKs you need
// import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database';
// import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// export const db = getFirestore(firebase);
// export const realTimeDatabase = getDatabase(firebase);
// export const storage = getStorage(firebase);
// const analytics = getAnalytics(app);