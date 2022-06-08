import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import { GREEN_DB_COLLECTION_QUIZES, USER_CUSTOM_QUIZ_HOMESCREEN } from "../constant/constants";
import { readCollection } from "../firebase/config";
// import bottomNav from './styles/bottomNav';

import CustumeButton from "../components/button";
import CustumeTable from "../components/table";

export default function ResultsScreen({ navigation }) {

    const returntoHome = () => {
        
        navigation.navigate(USER_CUSTOM_QUIZ_HOMESCREEN);
        
    };

    return (
        <View>
            <Text>
                result screen
                <CustumeButton name = 'Home' onPressHandler = {returntoHome} type = 'button' />
            </Text>
        </View>
    )
}