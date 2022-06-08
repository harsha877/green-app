import  firebase from "firebase";
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

export const readCollection = async (collectionName) => {
    var collectioData = [];
    const rawsnapshot = await db.collection(collectionName).get();

    rawsnapshot.forEach ((doc) => {
                         //console.log((doc.data()));
                         collectioData.push(doc.data());
                     });
    
    return collectioData;
      
};
