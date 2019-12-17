import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDgE-C0B22Vdyi5D4BiKebbPHlO993H9Ag",
  authDomain: "highshop-1.firebaseapp.com",
  databaseURL: "https://highshop-1.firebaseio.com",
  projectId: "highshop-1",
  storageBucket: "highshop-1.appspot.com",
  messagingSenderId: "797270481644"
};
firebase.initializeApp(config);
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
