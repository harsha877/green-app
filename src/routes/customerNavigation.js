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
import FeedBack from "../views/feedback";

const Stack = createStackNavigator();

export default function CustomerNavigator() {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name='customer login' options={{headerShown: false}} component={Customer} />
            <Stack.Screen name='customer question' options={{headerShown: false}} component={QuizInput} />
            <Stack.Screen name='customer view' options={{headerShown: false}} component={CustomerViewScreen} />
            
   
        </Stack.Navigator>
    
  );
}