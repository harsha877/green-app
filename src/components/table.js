import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { GREEN_DB_COLLECTION_QUIZES_COLUMNS } from "../constant/constants";
import Row from "./row";

export default function CustumeTable({data , onPressHandler}){

    return (
        <FlatList
                style = {styles.view}
                nestedScrollEnabled={true}
                data = {data}
                renderItem = { ({item}) => 
                        (<Row onPressHandler = {onPressHandler} row= {item} />)}
                        
        />
        );
};

const styles = StyleSheet.create({
    view: {
        padding: 1,
        borderColor : 'black',
        margin: 1,
        color: 'white',
    },
});