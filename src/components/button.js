import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustumeButton({name, onPressHandler, type}){

    return(
        <TouchableOpacity onPress={onPressHandler}>
            <View style = {type == 'button' ? styles.button : styles.list}>
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