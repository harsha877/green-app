import React, { useState } from "react";
import { View, Text, Button } from 'react-native';
import { db } from "../firebase/config";
// import bottomNav from './styles/bottomNav';



export default function QuizScreen({ navigation }) {

    var [text, setTest] = useState("default");

    const getQuizList = () =>{
        db.collection("quizes")
            .get()
            .then( (snap) => {
                snap.forEach( (doc) => {
                    console.log(doc.data());
                    setTest(JSON.stringify(doc.data()));
                })
            });
        };

    //collection(db , 'quizes').then( (data) => setTest(data));
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title ='Load Latest Quizes' onPress={getQuizList}/>
            <Text>Quiz Screen {text}</Text>
        </View>
    );
}


{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Quiz Screen</Text>
        </View> */}