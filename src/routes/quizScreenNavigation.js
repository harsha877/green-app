import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import QuestionScreen from "../views/questionScreen"
import QuizScreen from "../views/quizScreen"
import ResultsScreen from "../views/resultsScreen"
import {
	USER_CUSTOM_QUIZ_HOMESCREEN,
	USER_CUSTOM_QUIZ_QUESTIONSCREEN,
	USER_CUSTOM_QUIZ_RESULTSCREEN,
} from "../constant/constants"

const Stack = createStackNavigator()

export default function QuizScreenNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={USER_CUSTOM_QUIZ_HOMESCREEN}
				options={{ headerShown: false }}
				component={QuizScreen}
			/>
			<Stack.Screen
				name={USER_CUSTOM_QUIZ_RESULTSCREEN}
				component={ResultsScreen}
			/>
			<Stack.Screen
				name={USER_CUSTOM_QUIZ_QUESTIONSCREEN}
				component={QuestionScreen}
			/>
		</Stack.Navigator>
	)
}
