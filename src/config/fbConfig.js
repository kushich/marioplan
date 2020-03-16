import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBFObIWrsA0xXpCiL45l1Pv2P5vzBFGSVQ",
  authDomain: "marioplan-4c00b.firebaseapp.com",
  databaseURL: "https://marioplan-4c00b.firebaseio.com",
  projectId: "marioplan-4c00b",
  storageBucket: "marioplan-4c00b.appspot.com",
  messagingSenderId: "630731600629",
  appId: "1:630731600629:web:3d51cbe1517d7baa914bbc"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase