import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustumeButton({name, onPressHandler, type, colorsuper}){

    const [color,setColor] = useState(colorsuper==undefined ? '#1ca3ec': colorsuper );
    if (type === 'button') {
        type =  styles.button
    }else{
        type =  styles.list
    }


    
    return(
        <TouchableOpacity onPress={ () => {onPressHandler()}}>
            <View style = {{...type, backgroundColor: color}}>
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
        backgroundColor: "#003f69",
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        width: 125,
        alignSelf: "center",
    },
    buttonText: {
        color: "#ffffff",
		fontSize: 18,
        textAlign: "center",
        padding: 5,
    },
    list: {
        borderRadius: 20,
        backgroundColor: "#003f69",
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 4,
        //width: '',
        borderColor: 'black',
        //display: 'block',

    },
});