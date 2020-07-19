//
//  UserEnterPhoneNumber
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class UserEnterPhoneNumber extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onResendCodePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminLogin")
	}

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPhoneVerification")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 20,
						marginLeft: 36,
						marginRight: 38,
						marginTop: 56,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<TouchableOpacity
						onPress={this.onBackButtonPressed}
						style={styles.backButtonButton}>
						<Image
							source={require("./../../assets/images/back-button.png")}
							style={styles.backButtonButtonImage}/>
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onMenuButtonPressed}
						style={styles.menuButtonButton}>
						<Image
							source={require("./../../assets/images/menu-button.png")}
							style={styles.menuButtonButtonImage}/>
					</TouchableOpacity>
				</View>
				<View
					style={styles.titlePageYourPhView}>
					<Text
						style={styles.yourPhoneText}>Your Phone</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.enterYourPhoneNumText}>Kick it off by entering in your phone number!</Text>
				</View>
				<View
					style={styles.formPhoneView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<TextInput
							autoCorrect={false}
							placeholder="+1 (404) 867-5309"
							style={styles.enterPhoneNumberTextInput}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 2,
							right: 0,
							top: 0,
							bottom: 0,
						}}>
						<Text
							style={styles.enterPhoneNumberTText}>PHONE NUMBER</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.lineView}/>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onButtonPressed}
					style={styles.buttonButton}>
					<Text
						style={styles.buttonButtonText}>Next!</Text>
				</TouchableOpacity>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.dontGetItText}>admin:</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onResendCodePressed}
						style={styles.resendCodeButton}>
						<Text
							style={styles.resendCodeButtonText}>Login and sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	backButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 8,
		height: 14,
		marginTop: 3,
	},
	backButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	backButtonButtonImage: {
		resizeMode: "contain",
	},
	menuButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	menuButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 4,
		height: 20,
	},
	menuButtonButtonImage: {
		resizeMode: "contain",
	},
	titlePageYourPhView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 320,
		height: 74,
		marginLeft: 20,
		marginTop: 17,
	},
	yourPhoneText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 301,
		height: 32,
	},
	enterYourPhoneNumText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	formPhoneView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 20,
		marginRight: 18,
		marginTop: 55,
	},
	enterPhoneNumberTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		height: 26,
		marginRight: 2,
	},
	enterPhoneNumberTText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	lineView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	buttonButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 39,
	},
	buttonButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	loginLinkView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 147,
		height: 15,
		marginLeft: 18,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	dontGetItText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	resendCodeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 104,
		height: 15,
	},
	resendCodeButtonText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	resendCodeButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
