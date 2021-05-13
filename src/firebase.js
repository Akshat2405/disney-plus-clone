import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAfD_duUGlY2RuN29cWg9l684DlCzMtX-o",
  authDomain: "disney-plus-clone-ea66d.firebaseapp.com",
  projectId: "disney-plus-clone-ea66d",
  storageBucket: "disney-plus-clone-ea66d.appspot.com",
  messagingSenderId: "609377353545",
  appId: "1:609377353545:web:37e708273b74ca0edd6498",
  measurementId: "G-SR8VEG6MF6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;