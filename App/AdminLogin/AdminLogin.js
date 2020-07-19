//
//  AdminLogin
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class AdminLogin extends React.Component {

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

	onButtonsColorButtPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminSignUpInformation")
	}

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onSignUpPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminSignUp")
	}

	onRetrivePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminForgotPassword")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
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
				<Text
					style={styles.pageTitleLoginText}>Login</Text>
				<View
					style={styles.formView}>
					<View
						style={styles.formLineTwoView}>
						<Text
							style={styles.emailAddressText}>EMAIL ADDRESS</Text>
						<TextInput
							autoCorrect={false}
							placeholder="john@mail.com"
							style={styles.inputEmailAddressTextInput}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.lineTwoView}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.passwordView}>
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
							<View
								style={styles.formLineView}>
								<Text
									style={styles.passwordText}>PASSWORD</Text>
								<TextInput
									autoCorrect={false}
									placeholder="********"
									secureTextEntry={true}
									style={styles.enterPasswordTextInput}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.lineView}/>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/eye-off.png")}
								style={styles.eyeOffImage}/>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onButtonsColorButtPressed}
					style={styles.buttonsColorButtButton}>
					<Text
						style={styles.buttonsColorButtButtonText}>Login</Text>
				</TouchableOpacity>
				<View
					style={styles.signUpLinkView}>
					<Text
						style={styles.needAnAccountText}>need an account?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onSignUpPressed}
						style={styles.signUpButton}>
						<Text
							style={styles.signUpButtonText}>Sign up</Text>
					</TouchableOpacity>
				</View>
				<View
					style={styles.retriveLinkView}>
					<Text
						style={styles.forgetPasswordText}>forgot your password?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onRetrivePressed}
						style={styles.retriveButton}>
						<Text
							style={styles.retriveButtonText}>Retrive Password</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		alignItems: "flex-start",
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
	pageTitleLoginText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 256,
		marginLeft: 20,
		marginTop: 17,
	},
	formView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 132,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	formLineTwoView: {
		backgroundColor: "transparent",
		height: 56,
		alignItems: "flex-start",
	},
	emailAddressText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	inputEmailAddressTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 321,
		height: 18,
		marginTop: 10,
	},
	lineTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		alignSelf: "stretch",
		height: 1,
	},
	passwordView: {
		backgroundColor: "transparent",
		height: 56,
	},
	formLineView: {
		backgroundColor: "transparent",
		height: 56,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		alignSelf: "flex-start",
	},
	enterPasswordTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 18,
		marginRight: 47,
		marginTop: 10,
	},
	lineView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	eyeOffImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginRight: 19,
	},
	buttonsColorButtButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 205,
		height: 50,
		marginLeft: 20,
		marginTop: 35,
	},
	buttonsColorButtButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsColorButtButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signUpLinkView: {
		backgroundColor: "transparent",
		width: 155,
		height: 15,
		marginLeft: 20,
		marginTop: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	needAnAccountText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	signUpButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 44,
		height: 15,
	},
	signUpButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signUpButtonText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	retriveLinkView: {
		backgroundColor: "transparent",
		width: 179,
		height: 15,
		marginLeft: 20,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	forgetPasswordText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	retriveButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 112,
		height: 15,
	},
	retriveButtonText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	retriveButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
