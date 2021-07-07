import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPeSSrlT9F_b7HNvZRDfN0h7EM9U5VBLY",
  authDomain: "olx-clone-77cd5.firebaseapp.com",
  databaseURL: "https://olx-clone-77cd5-default-rtdb.firebaseio.com/",
  projectId: "olx-clone-77cd5",
  storageBucket: "olx-clone-77cd5.appspot.com",
  messagingSenderId: "933905592106",
  appId: "1:933905592106:web:85cf92e190bb78ac3f7853",
  measurementId: "G-78M0QDSW1D",
};

export default  firebase.initializeApp(firebaseConfig)