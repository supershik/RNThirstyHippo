//
//  AdminSignUp
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class AdminSignUp extends React.Component {

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

	onLoginPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminLogin")
	}

	onButtonsColorButtPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminLogin")
	}

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
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
					style={styles.pageTitleSignUpText}>Sign Up</Text>
				<View
					style={styles.formView}>
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
							style={styles.formLineTwoView}>
							<Text
								style={styles.emailAddressText}>EMAIL ADDRESS</Text>
							<TextInput
								autoCorrect={false}
								placeholder="john@mail.com"
								style={styles.inputEmailTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.lineTwoView}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}}>
						<View
							style={styles.formLineThreeView}>
							<Text
								style={styles.fullNameText}>FULL NAME</Text>
							<TextInput
								autoCorrect={false}
								placeholder="John Doe"
								style={styles.inputNameTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.lineThreeView}/>
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
										style={styles.inputPasswordTextInput}/>
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
				</View>
				<TouchableOpacity
					onPress={this.onButtonsColorButtPressed}
					style={styles.buttonsColorButtButton}>
					<Text
						style={styles.buttonsColorButtButtonText}>Sign Up</Text>
				</TouchableOpacity>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.alreadyHaveAnAccoText}>already have an account?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onLoginPressed}
						style={styles.loginButton}>
						<Text
							style={styles.loginButtonText}>Login</Text>
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
	menuButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pageTitleSignUpText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 281,
		marginLeft: 20,
		marginTop: 26,
	},
	formView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 206,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 29,
	},
	formLineTwoView: {
		backgroundColor: "transparent",
		height: 54,
		marginRight: 1,
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
	inputEmailTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 18,
		marginTop: 12,
	},
	lineTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	formLineThreeView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
	},
	fullNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	inputNameTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 18,
		marginTop: 12,
	},
	lineThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	passwordView: {
		backgroundColor: "transparent",
		height: 54,
		marginRight: 1,
	},
	formLineView: {
		backgroundColor: "transparent",
		height: 54,
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
	},
	inputPasswordTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 18,
		marginTop: 12,
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
		marginTop: 37,
	},
	buttonsColorButtButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	buttonsColorButtButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	loginLinkView: {
		backgroundColor: "transparent",
		width: 188,
		height: 15,
		marginLeft: 20,
		marginTop: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	alreadyHaveAnAccoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 138,
	},
	loginButtonText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	loginButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	loginButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 33,
		height: 15,
	},
})
