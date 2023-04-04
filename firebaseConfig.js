// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtSkeCgA75kSg_n_Wt3B8EEYKx5gcPe_E",
  authDomain: "convergentgymiot.firebaseapp.com",
  databaseURL: "https://convergentgymiot-default-rtdb.firebaseio.com",
  projectId: "convergentgymiot",
  storageBucket: "convergentgymiot.appspot.com",
  messagingSenderId: "834360843901",
  appId: "1:834360843901:web:122d5bcbbdf5236a0e1b14",
  measurementId: "G-N6QJZ7DCW0"
//fireTest configuration 
/*   apiKey: "AIzaSyDKPc0RUt9n0xVQ5Bvt7ZCPAWUp4KyLFVs",
  authDomain: "fire-test-233d5.firebaseapp.com",
  projectId: "fire-test-233d5",
  storageBucket: "fire-test-233d5.appspot.com",
  messagingSenderId: "249381466936",
  appId: "1:249381466936:web:501d96770df4c8771b47cd" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}
