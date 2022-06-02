import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import { GREEN_DB_COLLECTION_QUIZES } from "../constant/constants";
import { db, readCollection } from "../firebase/config";
// import bottomNav from './styles/bottomNav';

import CustumeButton from "../components/button";
import CustumeTable from "../components/table";

export default function QuizScreen({ navigation }) {

    var [quizzes, setTest] = useState({records: {}, status: 'unloaded'});

    const getQuizList = () => {
        let records = [];
        readCollection(GREEN_DB_COLLECTION_QUIZES).then( data => {
            console.log(data);
            setTest({ records : data , status : "loaded"});
            console.log("Quiz results.......");
            console.log(data);
        }).catch( () =>
            console.log("Error pulling results from fireBase collection 'quizs' ")
        );
        
    };

    var [loadFlag, setLoadFlag] = useState( () => {
        getQuizList();
        return {pageStatus : 'loaded'}
    });
    
    return (
        <ScrollView >
            <CustumeButton name = 'Refresh' onPressHandler = {getQuizList} type = 'button' />
            <Text>{JSON.stringify(quizzes.records)}</Text>
        </ScrollView>
    );
}


{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Quiz Screen</Text>
        </View> */}


        // return (
        //     <ScrollView >
        //         <CustumeButton name = 'Refresh' onPressHandler = {getQuizList} type = 'button' />
        //         <CustumeTable data = {quizzes.records}/>
        //         <Text>{JSON.stringify(quizzes.records)}</Text>
        //     </ScrollView>
        // );