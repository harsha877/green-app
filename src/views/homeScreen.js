import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import TypeWriter from "react-native-typewriter"
import Questions from "../json/questions.json"
import Option from "../components/options.js"

export default function HomeScreen({ route, navigation }) {
	const { index } = route.params
	return (
		<View>
			<TypeWriter style={styles.typeWriter} typing={1}>
				Water Footprint Calculator
			</TypeWriter>
			<View
				style={{
					justifyContent: "space-between",
					flexDirection: "row",
				}}
			>
				<Text style={styles.questionNo}>
					{index + 1}/{Questions.questions.length}
				</Text>
			</View>
			<Text style={styles.Question}>
				{Questions.questions[index].question}
			</Text>
			{Questions.questions[index].answers.map((option, i) => (
				<Option
					value={option}
					navigation={navigation}
					optionIdx={i}
					qnIndex={index}
					key={i}
				/>
			))}
		</View>
	)
}
const styles = StyleSheet.create({
	typeWriter: {
		color: "#409cd0",
		fontSize: 30,
		margin: 15,
		fontWeight: "500",
		textAlign: "center",
	},
	questionNo: {
		color: "#409cd0",
		fontSize: 20,
		margin: 20,
	},
	Question: {
		fontSize: 20,
		margin: 20,
	},
	nextButton: {
		height: 50,
		width: "10%",
		backgroundColor: "#3700B3",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		margin: 20,
		borderRadius: 15,
	},
	nextText: {
		color: "white",
		fontWeight: "900",
	},
})
