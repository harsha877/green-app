import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import {StateProvider} from '../views/stateProvider';
import reducer, {initialState} from '../views/reducer';

// Screens
import HomeScreen from '../views/homeScreen';
import Customer from '../views/customer';
import QuizScreen from '../views/quizScreen';
import QuizScreenNavigator from './quizScreenNavigation';
import CustomerNavigator from './customerNavigation';

//Screen names
const homeName = "QuestionScreen";
const loginName = "Customer Login";
const quizName = "Quiz";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === loginName) {
              iconName = focused ? 'log-in' : 'log-in-outline';

            } else if (rn === quizName) {
              iconName = focused ? 'information' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
          //tabBarStyle: { position: 'absolute' },
          //tabBarIconStyle: { padding: 10}, //this effects only icon
          tabBarLabelStyle: {paddingBottom: 10}, // this effects only label
          //tabBarItemStyle: { paddingBottom: 0}, // this a single option both icon and text
          tabBarStyle: { height: 60 },
          tabBarHideOnKeyboard : true,
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} initialParams={{index: 0}}/>
        <Tab.Screen name={loginName} options={{headerShown: false}} component={CustomerNavigator} />
        <Tab.Screen name={quizName} options={{headerShown: false}} component={QuizScreenNavigator} />

      </Tab.Navigator>
    </NavigationContainer>
    </StateProvider>
  );
}

export default MainContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
