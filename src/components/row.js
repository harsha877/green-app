import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { capitalizeEachWord } from "../utils/utils";
import CustumeButton from "./button";

export default function Row({row , onPressHandler}){

    const name = capitalizeEachWord( row.quizName + ' By ' + row.customerName );

    return (
       <CustumeButton name = {name} onPressHandler = {onPressHandler} />
    )
}