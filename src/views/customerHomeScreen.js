import React, { useState } from "react"
import {
	View,
	Text,
	Button,
	ScrollView,
	SafeAreaView,
	StyleSheet,
} from "react-native"
import { searchQuizesForCustomer } from "../firebase/config"

export default function CustomerHomeScreen({
	navigation,
	onSubmitHandler,
	user,
}) {
	const [quiz, setQuiz] = useState()

	const handleCreateQuiz = () => {
		navigation.navigate("customer question", { user })
	}

	const handleViewQuizzes = () => {
		console.log("view quizzes")
		searchQuizesForCustomer(user.username).then((cusQuiz) => {
			//console.log(cusQuiz);
			setQuiz(cusQuiz)
			navigation.navigate("customer view", { user })
		})
	}

	const handleFeedback = () => {
		console.log("Input Feedback")
		navigation.navigate("customer feedback", { user })
		
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Customer Homepage</Text>
			<View style={styles.button1}>
				<Button
					color={"#063f5c"}
					onPress={handleCreateQuiz}
					title="Create Quiz"
				/>
			</View>
			<View style={styles.button1}>
				<Button
					color={"#063f5c"}
					onPress={handleViewQuizzes}
					title="View Quizzes"
				/>
			</View>
			<View style={styles.button1}>
				<Button
					color={"#063f5c"}
					onPress={handleFeedback}
					title="App Feedback"
				/>
			</View>
			<View style={styles.button2}>
				<Button onPress={() => onSubmitHandler("")} title="Log Out" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: 60,
	},
	text: {
		marginTop: 60,
		color: "#000000",
		fontSize: 20,
		fontWeight: "600",
	},
	button1: {
		marginTop: 20,
		borderRadius: 50,
	},
	button2: {
		marginTop: 100,
		borderRadius: 50,
	},
})

//{user == "" ? <CustomerLogin onSubmit={onSubmitHandler} /> : <QuizInput setUser={setUser} navigation = {navigation} />}
