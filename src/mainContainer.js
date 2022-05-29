import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './views/homeScreen';
import CustomerLogin from './views/customerLogin';
import QuizScreen from './views/quizScreen';

//Screen names
const homeName = "Home";
const loginName = "Customer Login";
const quizName = "Quiz";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
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
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={loginName} component={CustomerLogin} />
        <Tab.Screen name={quizName} component={QuizScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;