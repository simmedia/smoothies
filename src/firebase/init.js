import firebase from 'firebase'
import firestore from 'firebase/firestore'
 // Initialize Firebase
var config = {
 apiKey: "AIzaSyAG1EtRfd0d2W6nH2HyyXaSmJl5XzkYBws",
 authDomain: "ninja-smoothies-bc4eb.firebaseapp.com",
 databaseURL: "https://ninja-smoothies-bc4eb.firebaseio.com",
 projectId: "ninja-smoothies-bc4eb",
 storageBucket: "ninja-smoothies-bc4eb.appspot.com",
 messagingSenderId: "917907208607"
 };
 const firebaseApp = firebase.initializeApp(config);
//  firebaseApp.firestore().settings({timestampsSnapshots: true})

//  Export firestore database
export default firebaseApp.firestore()