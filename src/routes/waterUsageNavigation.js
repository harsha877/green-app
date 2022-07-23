import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/homeScreen';
import WaterUsageScreen from '../views/WaterUsageScreen';
import FeedBack from "../views/feedback";
import {Home_Screen, Water_Usage_Screen, Feedback_Screen}  
    from "../constant/constants";

const Stack = createStackNavigator();

export default function WaterUsageNavigation() {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name={Home_Screen} options={{headerShown: false}} initialParams={{index: 0}}  component={HomeScreen}/>
            <Stack.Screen name={Water_Usage_Screen} component={WaterUsageScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    
  );
}