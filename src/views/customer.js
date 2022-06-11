import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import CustomerHomeScreen from "./customerHomeScreen";
import CustomerLogin from "./customerLogin";
import QuizInput from "./QuizInput";
export default function Customer({ navigation }) {
    const [user, setUser] = useState("");

    const onSubmitHandler = (data) => {
        setUser(data);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            {user == "" ? <CustomerLogin onSubmit={onSubmitHandler} /> : <CustomerHomeScreen onSubmitHandler = {onSubmitHandler} navigation = {navigation} />}
        </KeyboardAvoidingView>
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