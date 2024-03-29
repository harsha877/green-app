import React, { useState } from "react"
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native"
import Svg, { Path } from "react-native-svg"
import TypeWriter from "react-native-typewriter"
import Questions from "../json/questions.json"
import Option from "../components/options.js"
import CustumeButton from "../components/button"
export default function HomeScreen({ route, navigation }) {
	const { index } = route.params
	return (
		<ScrollView>
			<Image
				style={styles.image_style}
				source={require("../../assets/app_logo.png")}
			/>
			<View style={styles.container}>
				<Text style={styles.questionNo}>
					{index + 1}/{Questions.questions.length}
				</Text>
				<Text style={styles.Question}>
					{Questions.questions[index].question}
				</Text>
				{Questions.questions[index].answers.map((user) => {
					let keys = Object.keys(user)
					return (
						<TouchableOpacity
							style={styles.paragraph}
							key={keys[0]}
						>
							{keys.map((key) => {
								return (
									<Option
										value={`${key}`}
										key={`${key}`}
										optionIdx={`${user[key]}`}
										navigation={navigation}
										qnIndex={index}
									/>
								)
							})}
						</TouchableOpacity>
					)
				})}
			</View>
			<View style={styles.top}>
				<View style={styles.box}>
					<Svg
						height={200}
						width={Dimensions.get("screen").width}
						viewBox="0 0 1440 320"
						style={styles.topWavy}
					>
						<Path
							fill="#2471A3"
							d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
						/>
					</Svg>
				</View>
			</View>
			<View style={styles.bottom}>
				<View style={styles.box}>
					<Svg
						height={200}
						width={Dimensions.get("screen").width}
						viewBox="0 0 1440 320"
						style={styles.bottomWavy}
					>
						<Path
							fill="#2471A3"
							d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
						/>
					</Svg>
				</View>
			</View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 2,
		marginTop: 20,
	},
	image_style: {
		resizeMode: "contain",
		alignSelf: "center",
		height: 80,
		width: 450,
		marginTop: 30,
	},
	paragraph: {
		borderColor: "black",
		borderWidth: 1,
		margin: 30,
		marginBottom: 3,
		borderRadius: 25,
		// height: 70,
		backgroundColor: "#003f69",
		fontSize: 18,
		textAlign: "center",
		paddingVertical: 15,
	},
	typeWriter: {
		color: "#2471A3",
		fontSize: 25,
		marginTop: 40,
		fontWeight: "500",
		textAlign: "center",
	},
	questionNo: {
		color: "#2471A3",
		fontSize: 18,
		margin: 5,
	},
	Question: {
		fontSize: 20,
		margin: 5,
		fontWeight: "500",
	},
	bottom: {
		position: "absolute",
		width: Dimensions.get("screen").width,
		bottom: 10,
	},
	box: {
		backgroundColor: "#2471A3",
		height: 80,
		marginTop: 190,
	},
	bottomWavy: {
		position: "absolute",
		bottom: 20,
	},
})
