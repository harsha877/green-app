import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustumeButton from "../components/button";

export default function QuestionScreen({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    question 1
                </Text>
            </View>
            <View>
                <CustumeButton name = 'Option 1' />
                <CustumeButton name = 'Option 2' />
                <CustumeButton name = 'Option 3' />
                <CustumeButton name = 'Option 4' />
            </View>
            <View style = {styles.navigation}>
                <CustumeButton name = 'Previous' />
                <CustumeButton name = 'Next' />
                <CustumeButton name = 'Submit' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    options:{

    },
    navigation:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})
