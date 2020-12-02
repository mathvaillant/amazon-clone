import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBGsQhTRYo5bm3oaD3KOIV5ZG5lKXnRAWY",
  authDomain: "full-stack-clone.firebaseapp.com",
  databaseURL: "https://full-stack-clone.firebaseio.com",
  projectId: "full-stack-clone",
  storageBucket: "full-stack-clone.appspot.com",
  messagingSenderId: "434810238095",
  appId: "1:434810238095:web:36abe8e2074f36397aacfa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };