import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from '../views/questionScreen';
import QuizScreen from '../views/quizScreen';
import ResultsScreen from '../views/resultsScreen';
import {USER_CUSTOM_QUIZ_HOMESCREEN, USER_CUSTOM_QUIZ_QUESTIONSCREEN, USER_CUSTOM_QUIZ_RESULTSCREEN}  
    from "../constant/constants";
import Customer from "../views/customer";
import QuizInput from "../views/QuizInput";
import CustomerViewScreen from "../views/customerViewScreen";

const Stack = createStackNavigator();

export default function CustomerNavigator() {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name='customer login' component={Customer} />
            <Stack.Screen name='customer question' component={QuizInput} />
            <Stack.Screen name='customer view' component={CustomerViewScreen} />
   
        </Stack.Navigator>
    
  );
}