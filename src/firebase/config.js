//==========================================
// Title:  Config file to connect to database
// Author: Anusha
//==========================================

import * as firebase from "firebase";
import { GREEN_DB_COLLECTION_QUIZES } from "../constant/constants";


//Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyCHhqxWOL288qM4E33W85bzf5Y7-LP7q6s",
  authDomain: "green-db-7954e.firebaseapp.com",
  projectId: "green-db-7954e",
  storageBucket: "green-db-7954e.appspot.com",
  messagingSenderId: "817637952130",
  appId: "1:817637952130:web:4c2ecbe03d01ecaebe429b"
};

// To Initialize the Firebase with the above functionalities
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//Database object which is used to connect to the db directly, to perform crud operations
export const db = firebase.firestore(app);

//Read colletion takes document name as an argument and return promis of the respective data
export const readCollection = async (collectionName) => {
  var collectioData = [];
  const rawsnapshot = await db.collection(collectionName).get();

  rawsnapshot.forEach((doc) => {
    collectioData.push(doc.data());
  });

  return collectioData;
};

//returns a single document Takes document name and collection name as arguments 
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

//search colletion takes document name and keyword
export const search = async (collectionName, keyword) => {
  keyword = keyword.toLocaleLowerCase();
  if (keyword.length < 3) {
    console.log("search key is too small");
    return;
  }
  var collectioData = [];
  const rawsnapshot = await db.collection(collectionName).get();

  rawsnapshot.forEach((doc) => {
    //console.log((doc.data()));
    let docData = doc.data()
    if ((docData.searchKey.toLocaleLowerCase()).indexOf(keyword) != -1) {
      collectioData.push(docData);
    }
  });
  return collectioData;
};

//search colletion takes customerID
export const searchQuizesForCustomer = async (customerID) => {
  customerID = customerID.toLocaleLowerCase();
  if (customerID.length < 3) {
    console.log("search key is too small");
    return;
  }
  var collectioData = [];
  const rawsnapshot = await db.collection(GREEN_DB_COLLECTION_QUIZES).get();

  rawsnapshot.forEach((doc) => {
    //console.log((doc.data()));
    let docData = doc.data()
    if (docData.customerID === customerID) {
      collectioData.push(docData);
    }
  });
  return collectioData;
};

// const docData = {
//   name: 'windsor toronto department of medicine',
//   username: 'utorontodom',
//   password: 'utorontodom',
//   orginization: 'university of toronto',
//   searchKey: 'windsor toronto department of medicine',
// }

//writes data to the collection takes the JSON, document name, collection name
//example JSON
const docData = {
  customerID: 'uwindsordom',
  customerName: 'windsor university department of medicine',
  quizName: 'go green go water',
  searchKey: 'windsor university department of medicine | go green go water',
  length: 3,
  questions:[
              {
                question: 'question1',
                option1: 'o1',
                option2: 'o2',
                option3: 'o3',
                option4: 'o4',
                weight: [1,2,3,4],
              },
              {
                question: 'question2',
                option1: 'o1',
                option2: 'o2',
                option3: 'o3',
                option4: 'o4',
                weight: [1,2,3,4],

              },
              {
                question: 'question2',
                option1: 'o1',
                option2: 'o2',
                option3: 'o3',
                option4: 'o4',
                weight: [1,2,3,4],

              },
            ]
}

//writeCollection(docData, 'go green go water' , 'quiz');
//search('quiz', 'wind').then( data => console.log(data))
//searchQuizesForCustomer('utorontodom').then( data => console.log(data));