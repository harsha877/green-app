import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Questions from "../json/questions.json"
import { useStateValue } from "../views/stateProvider"

const Option = (props) => {
	const [{ score }, dispatch] = useStateValue()
	const updateScore = (Score) => {
		dispatch({
			type: "UPDATE_SCORE",
			score: Score,
		})
	}
	// console.log(props.optionIdx);
	let calculateIdx = +props.optionIdx
	console.log(props.qnIndex)
	return (
		<View style={[styles.Option]}>
			<TouchableOpacity
				onPress={() => {
					updateScore(calculateIdx)
					if (props.qnIndex + 1 >= Questions.questions.length) {
						console.log("End of Questions")
						props.navigation.navigate("WaterUsageScreen")
					} else {
						props.navigation.navigate("QuestionScreen", {
							index: props.qnIndex + 1,
						})
					}
				}}
			>
				<Text style={styles.OptionText}>{props.value}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Option

const styles = StyleSheet.create({
	Option: {
		// borderColor: 'black',
		// borderWidth: 1,
		// margin: 40,
		// marginBottom: 3,
		// borderRadius: 25,
		// height: 95,
		// backgroundColor: '#003f69',
		// fontSize: 18,
		// textAlign: 'center',
	},
	OptionText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
})
