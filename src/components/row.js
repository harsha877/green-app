import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustumeButton from "./button";

export default function Row({row , onPressHandler}){
    return (
       <CustumeButton name = {row.quizName} onPressHandler = {onPressHandler} />
    )
}