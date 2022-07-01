import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { searchQuizesForCustomer } from "../firebase/config";


export default function CustomerHomeScreen({ navigation, onSubmitHandler, user }) {

    const [quiz, setQuiz] = useState();

    const handleCreateQuiz = () => {
        
        navigation.navigate('customer question', {user} );
    }

    const handleViewQuizzes = () =>{
        console.log("view quizzes");
        searchQuizesForCustomer(user.username).then( 
            cusQuiz => {
                //console.log(cusQuiz);
                setQuiz(cusQuiz);
                navigation.navigate('customer view', {user});
            });
        
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Question}>Customer Homepage</Text>
                <Button onPress={handleCreateQuiz} title='Create Quiz' />
                <Button onPress={handleViewQuizzes} title='View Quizzes' />
                <Button onPress={() => onSubmitHandler("")} title='Log Out' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    Question: {
		fontSize: 20,
		margin: 5,
		fontWeight: "500",
        textAlign: 'center',
	}
});


//{user == "" ? <CustomerLogin onSubmit={onSubmitHandler} /> : <QuizInput setUser={setUser} navigation = {navigation} />}