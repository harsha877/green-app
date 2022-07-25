import * as React from "react"
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	Dimensions,
	TextInput,
	Button,
} from "react-native"
import Svg, { Path } from "react-native-svg"
import { useState } from "react"
import { readCollectionDocument } from "../firebase/config"
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView"
import reducer from "./reducer"
import { GREEN_DB_COLLECTION_CUSTOMER } from "../constant/constants"
export default function CustomerLogin({ onSubmit }) {
	const [username, setusername] = useState("")
	const [password, setPassword] = useState("")
	const [status, setStatus] = useState("")

	function handleLogin(e) {
		e.preventDefault()
		if (username.length == 0) {
			alert("Invalid Username or empty")
			return
		}
		if (password.length == 0) {
			alert("Invalid password or empty")
			return
		}
		readCollectionDocument(GREEN_DB_COLLECTION_CUSTOMER, username)
			.then((data) => {
				if (
					data !== undefined &&
					username == data.username &&
					password == data.password
				) {
					flag = true
					onSubmit(data)
					console.log("login successful")
				} else {
					alert("InCorrect Credentials")
				}
			})
			.catch((e) => console.log(e))
	}

	return (
		<ScrollView>
			<Text style={styles.headerText}>Customer Login Page</Text>
			<View style={styles.container}>
				<Image source={require("../../assets/avatar.png")} />
				<TextInput
					style={styles.TextInput}
					placeholder="username"
					value={username}
					onChangeText={(username) => setusername(username)}
				/>

				<TextInput
					style={styles.TextInput}
					placeholder="Password"
					secureTextEntry={true}
					value={password}
					onChangeText={(password) => setPassword(password)}
				/>

				<Button
					style={styles.Button}
					onPress={handleLogin}
					title="LOGIN"
				/>
				<Text style={styles.email_txt}>
                Note: To customize the quiz for your company, email us at "sessoion2group4@gmail.com"
            </Text>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
    },

	headerText: {
		color: "#2471A3",
		fontSize: 30,
		marginTop: 10,
		fontWeight: "500",
		textAlign: "center",
	},
    email_txt: {
        fontSize: 22,
        textAlign: "center",
        color: "#000000",
        fontWeight: "400",
        margin: 20,
    },
    TextInput: {
        height: 40,
        margin: 15,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    header_txt: {
        color: "#2471A3",
        fontSize: 25,
        marginTop: 10,
        marginBottom: 30,
        fontWeight: "500",
        textAlign: "center",
    },
    text: {
        height: 40,
        margin: 0,
        paddingTop: 5,
        color: "red",
    },
    Button: {
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
    },
    top: {},
    bottom: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        bottom: 10,
    },
    box: {
        backgroundColor: "#2471A3",
        height: 80,
        marginTop: 140,
    },
    bottomWavy: {
        position: "absolute",
        bottom: 20,
    },
})
