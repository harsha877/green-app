import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OptionButton({name, onPressHandler, type, data}){

    if (type === 'button') {
        type =  styles.button
    }else{
        type =  styles.list
    }

    //console.log(JSON.stringify(data.quizName));
    return(
        <TouchableOpacity onPress={ () => onPressHandler(data.quizName, data.customerID)}>
            <View style = {type}>
                <Text style = {styles.buttonText}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    );
} 
const styles = StyleSheet.create({
    button: {
        padding: 0,
        borderRadius: 50,
        backgroundColor: '#1ca3ec',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        width: 125,
        alignSelf: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    },
    list: {
        borderTopEndRadius: 10,
        backgroundColor: '#1992d4',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        //width: '',
        borderColor: 'black',
        //display: 'block',

    },
});