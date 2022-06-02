import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { GREEN_DB_COLLECTION_QUIZES_COLUMNS } from "../constant/constants";
import Row from "./row";

export default function CustumeTable({data}){

    return (
        <View style = {styles.view}>
            {data.length > 0 && (
               
                    <FlatList
                    data = {data}
                    renderItem = { ({item}) => 
                            (<Row row= {item} />)
                        }
                    
                    />
                )}
        </View>
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