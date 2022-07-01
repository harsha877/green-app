import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { GREEN_DB_COLLECTION_QUIZES, USER_CUSTOM_QUIZ_QUESTIONSCREEN } from "../constant/constants";
import { readCollection, search } from "../firebase/config";
// import bottomNav from './styles/bottomNav';

import CustumeButton from "../components/button";
import CustumeTable from "../components/table";

export default function QuizScreen({ navigation }) {

    const [quizzes, setTest] = useState({ records: {}, status: 'unloaded' });
    const [quiz, setQuiz] = useState({});

    const getQuizList = () => {
        setTest({ records: {}, status: 'unloaded' });
        //let records = [];
        readCollection(GREEN_DB_COLLECTION_QUIZES).then(data => {
            //console.log(data);
            setTest({ records: data, status: "loaded" });
            console.log("Quiz results.......");
            //console.log(data);
        }).catch(() =>
            console.log("Error pulling results from fireBase collection 'quizs' ")
        );

    };

    const onPressQuiz = (quizName, customerID) => {
        // quizName, customerID;

        let data = (quizzes.records.filter((data) => (quizName === data.quizName)));
        setQuiz(data);
        //console.log(quiz);
        navigation.navigate(USER_CUSTOM_QUIZ_QUESTIONSCREEN, { data });

    };

    const searchHandler = (text) => {
        
        console.log(text);
        
        search(GREEN_DB_COLLECTION_QUIZES, text).then(
            (data) => setTest({ records: data, status: "loaded" })
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style = {styles.navigation}>
            <TextInput style = {styles.TextInput} onChangeText = { (text => searchHandler(text))} > </TextInput>
            <CustumeButton name='Refresh' onPressHandler={getQuizList} type='button' />
        </View>
            <CustumeTable data={quizzes.records} onPressHandler={onPressQuiz} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    TextInput: {
        //height: 40,
        margin: 10,
        width: 230,
        borderWidth: 1,
        padding: 0,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
    },
    navigation:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});



{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Quiz Screen</Text>
        </View> */}


        // return (
        //     <ScrollView >
        //         <CustumeButton name = 'Refresh' onPressHandler = {getQuizList} type = 'button' />
        //         <CustumeTable data = {quizzes.records} onPressHandler = {onPressQuiz} />
        //         <Text>{JSON.stringify(quizzes.records)}</Text>
        //     </ScrollView>
        // );