import React from "react"
import { StyleSheet, Text, View, Linking, Dimensions } from "react-native"
import { useStateValue } from "../views/stateProvider"
import Svg, { Path } from "react-native-svg"

const WaterUsageScreen = () => {
	const [{ user, score }] = useStateValue()
	return (
		<View style={styles.resultScreen}>
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
			<Text style={styles.headerText}>Results</Text>
			<Text style={styles.resultText}>
				Water Usage: {score} litres/day
			</Text>
			<Text style={styles.resultText1}>
				Canada Average Water Usage: 2432 litres/day
			</Text>
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
		</View>
	)
}

export default WaterUsageScreen

const styles = StyleSheet.create({
	resultScreen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	resultText: {
		fontSize: 25,
		textAlign: "center",
		color: "#000000",
		fontWeight: "500",
	},
	resultText1: {
		fontSize: 25,
		textAlign: "center",
		color: "#000000",
		fontWeight: "500",
		marginTop: 40,
	},
	headerText: {
		color: "#2471A3",
		fontSize: 30,
		margin: 40,
		fontWeight: "500",
		textAlign: "center",
	},
	top: {
		position: "absolute",
		width: Dimensions.get("screen").width,
		top: 0,
	},
	bottom: {
		position: "absolute",
		width: Dimensions.get("screen").width,
		bottom: 0,
	},
	box: {
		backgroundColor: "#2471A3",
		height: 80,
	},
	bottomWavy: {
		position: "absolute",
		bottom: 20,
	},
})
