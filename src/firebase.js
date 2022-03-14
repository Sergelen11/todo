import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZKkiLOQdA_hiy_4WakT4WBYpNyhBSsUI",
  authDomain: "todolist-react-5feab.firebaseapp.com",
  projectId: "todolist-react-5feab",
  storageBucket: "todolist-react-5feab.appspot.com",
  messagingSenderId: "440990371609",
  appId: "1:440990371609:web:e3b175ecf25fe4437b3f88",
  measurementId: "G-B1YLGGYLSV"
};
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()