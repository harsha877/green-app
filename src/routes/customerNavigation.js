import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Customer from "../views/customer"
import QuizInput from "../views/QuizInput"
import CustomerViewScreen from "../views/customerViewScreen"

const Stack = createStackNavigator()

export default function CustomerNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="customer login"
				options={{ headerShown: false }}
				component={Customer}
			/>
			<Stack.Screen
				name="customer question"
				options={{ headerShown: false }}
				component={QuizInput}
			/>
			<Stack.Screen name="customer view" component={CustomerViewScreen} />
		</Stack.Navigator>
	)
}
