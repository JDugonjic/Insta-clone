import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCom86LheaTwY0gSrIDZO7QYO_p0opbVSo",
  authDomain: "insta-clone-c4604.firebaseapp.com",
  projectId: "insta-clone-c4604",
  storageBucket: "insta-clone-c4604.appspot.com",
  messagingSenderId: "125957898571",
  appId: "1:125957898571:web:87e0efb524cc41042e68ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

export { db, auth, storage };
