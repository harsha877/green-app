import * as firebase from "firebase";
import { GREEN_DB_COLLECTION_CUSTOMER } from "../constant/constants";
//import { doc } from 'firebase/firestore';
//import firestore from '@react-native-firebase/firestore';
//import { getFireStrore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhqxWOL288qM4E33W85bzf5Y7-LP7q6s",
  authDomain: "green-db-7954e.firebaseapp.com",
  projectId: "green-db-7954e",
  storageBucket: "green-db-7954e.appspot.com",
  messagingSenderId: "817637952130",
  appId: "1:817637952130:web:4c2ecbe03d01ecaebe429b"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = firebase.firestore(app);

//read colletion takes document name
export const readCollection = async (collectionName) => {
  var collectioData = [];
  const rawsnapshot = await db.collection(collectionName).get();

  rawsnapshot.forEach((doc) => {
    //console.log((doc.data()));
    collectioData.push(doc.data());
  });

  return collectioData;

};

export async function readCollectionDocument(collectionName, documentName) {
  let rawsnapshot;
  await db.collection(collectionName)
    .doc(documentName)
    .get()
    .then((docsnapshot) => {
      rawsnapshot = docsnapshot.data();
    });

  console.log("Data read from Firebase....")
  console.log(rawsnapshot);;
  return rawsnapshot;

};

const docData = {
  name: 'windsor university department of medicine',
  username: 'uwindsordom',
  password: 'uwindsordom',
  orginization: 'university of windsor',
}


//writes data to the collection takes the JSON, document name, collection name
//example JSON
// const docData = {
//   quizName: 'Ada Lovelace',
//   quizid: 30,
// };
// Usage writeCollection(docData, 'testrun', 'quizes');
export const writeCollection = async (docData, docName, collectionName) => {
  var collectioData = [];


  db.collection(collectionName)
    .doc(docName)
    .set(docData)
    .then(() => {
      console.log('Document Added');
      return 1;
    }).catch((e) => {
      console.log(e);
      return 0;
    });

};

//writeCollection(docData, 'uwindsordom', 'customer');
