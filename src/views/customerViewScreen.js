import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button } from "react-native-web";
import CustumeButton from "../components/button";
import CustumeTable from "../components/table";
import { GREEN_DB_COLLECTION_QUIZES } from "../constant/constants";
import { searchQuizesForCustomer, writeCollection } from "../firebase/config";


export default function CustomerViewScreen({ navigation, route }) {

    const [user, setUser] = useState(route.params.user);
    const [quizzes, setQuizzes] = useState();
    const [quizFlag, setQuizFlag] = useState(true);
    const [optionsFlag, setOptionsFlag] = useState(false);
    const [editQuestionFlag, seteditQuestionFlag] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();
    const [questionIndex, setQuestionIndex] = useState();
    const [quiz, setQuiz] = useState();
    const [textBoxSize, setTextBoxSize] = useState(100);

    const handleViewQuizzes = (index) => {
        setSelectedIndex(index);
        setQuiz(quizzes[index])
        console.log("selected " + quizzes[index].quizName);
        setOptionsFlag(true);
        setQuizFlag(false);
        showQuestions();
    }

    const showQuestions = () => {
        if (optionsFlag && selectedIndex != undefined && quiz != undefined) {
            //console.log(quiz.questions.map(data => data));
            return (
                quiz.questions.map((data, index) =>
                    <Text style={styles.questions} onPress={() => setQuestionIndex(index)} key={index}>
                        {data.question + '\n'}
                    </Text>)
            );
        } else {
            console.log("view questions validations failed");
        }
    }


    const getData = () => {
        searchQuizesForCustomer(route.params.user.username).then(data => {
            setQuizzes(data);
            viewList();
            showQuestions();
        })
    }


    const viewList = () => {

        if (quizFlag && quizzes != undefined) {
            console.log("showing List of quizes")
            return (quizzes.map(
                (data, index) => {
                    //console.log(a);
                    return (
                        <CustumeButton key={index}
                            onPressHandler={() => handleViewQuizzes(index)}
                            name={data.quizName}
                            type='button' />
                    )
                }));
        }

    };

    const viewQuestions = () => {

        if (questionIndex != undefined) {
            return (
                <View style={styles.questionsEdit}>
                    <Text>Question: </Text>
                    <TextInput 
                        style={{ ...styles.textBoxes, height: textBoxSize }}
                        value={quiz.questions[questionIndex].question} 
                        onChangeText = {(question) => updatequestion("qestion",question)} 
                        multiline
                        onContentSizeChange={(e) => setTextBoxSize(e.nativeEvent.contentSize.height)}
                        />
                    <Text>Option 1: </Text>
                    <TextInput style= {styles.textBoxes} 
                        value={quiz.questions[questionIndex].option1}
                        onChangeText = {(question) => updatequestion("option1",question)} />
                    <Text>Option 2: </Text>
                    <TextInput style= {styles.textBoxes} 
                        value={quiz.questions[questionIndex].option2}
                        onChangeText = {(question) => updatequestion("option2",question)} />
                    <Text>Option 3: </Text>
                    <TextInput style= {styles.textBoxes} 
                        value={quiz.questions[questionIndex].option3}
                        onChangeText = {(question) => updatequestion("option3",question)}/>
                    <Text>Option 4: </Text>
                    <TextInput style= {styles.textBoxes} 
                        value={quiz.questions[questionIndex].option4}
                        onChangeText = {(question) => updatequestion("option4",question)}/>
                    <CustumeButton name="Save" onPressHandler={saveUpdatedData}/>
                </View>

            )
        }
    }

    const updatequestion = (topic ,text) => {
        let temp = {...quiz};
        if (topic === "qestion"){
            temp.questions[questionIndex].question = text;
        }else if (topic === "option1"){
            temp.questions[questionIndex].option1 = text;
        }else if (topic === "option2"){
            temp.questions[questionIndex].option2 = text;
        }else if (topic === "option3"){
            temp.questions[questionIndex].option3 = text;
        }else if (topic === "option4"){
            temp.questions[questionIndex].option4 = text;
        }
        setQuiz(temp);
    }

    const saveUpdatedData = () => {

        console.log(quiz.quizName+ " : data update");
        writeCollection(quiz, quiz.quizName, GREEN_DB_COLLECTION_QUIZES);
        alert("Changes Saved!");
        //to do need to uncomment according to requirment
        //navigation.navigate('customer login', {user});
    }

    const viewrefresh = () => {
        if (quizFlag) {
            return (<CustumeButton name="refresh" onPressHandler={getData} />)
        }
    }

    return (
        <ScrollView >
            <Text>Customer View page</Text>

            <View style={styles.list}>
                <CustumeButton name="refresh" onPressHandler={getData} type="button" />
                <Text>{viewList()}</Text>
            </View>
            <View style={styles.list}>{showQuestions()}</View>
            {viewQuestions()}

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    list: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    questions: {
        //alignItems: "center",
        backgroundColor: '#1992d4',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    questionsEdit: {
        //alignItems: "center",
        backgroundColor: '#1992d4',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    textBoxes: {
        margin: 15,
        //width: 250,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
});


//{user == "" ? <CustomerLogin onSubmit={onSubmitHandler} /> : <QuizInput setUser={setUser} navigation = {navigation} />}