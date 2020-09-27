import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0kwakii7cFMp0HsMK5Jo-QyNXK5QGxSA",
  authDomain: "whatsapp-clone-75ab6.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-75ab6.firebaseio.com",
  projectId: "whatsapp-clone-75ab6",
  storageBucket: "whatsapp-clone-75ab6.appspot.com",
  messagingSenderId: "677110962450",
  appId: "1:677110962450:web:83591735d5fa19f7967bcb",
  measurementId: "G-KNGK8E8TVQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
