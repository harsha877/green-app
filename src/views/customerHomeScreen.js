import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

export default function CustomerHomeScreen({ navigation, onSubmitHandler }) {



    const handleCreateQuiz = () => {
        navigation.navigate('customer question');
    }

    const handleViewQuizzes = () =>{
        console.log("view quizzes");
    }

    return (
        <View style={styles.container}>
            <Text>Customer Homepage</Text>
            <Button  onPress={handleCreateQuiz} title='Create Quiz' />
            <Button  onPress={handleViewQuizzes} title='View Quizzes' />
            <Button  onPress={() => onSubmitHandler("")} title='Log Out' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    }
});


//{user == "" ? <CustomerLogin onSubmit={onSubmitHandler} /> : <QuizInput setUser={setUser} navigation = {navigation} />}