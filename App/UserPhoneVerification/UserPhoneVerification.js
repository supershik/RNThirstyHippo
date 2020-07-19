//
//  UserPhoneVerification
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class UserPhoneVerification extends React.Component {

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
		
		navigate("UserEnterPhoneNumber")
	}

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onButtonsColorButtPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserExplanation")
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
					style={styles.titlePageConfirmView}>
					<Text
						style={styles.pageTitleText}>Confirmation</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.confirmationDescripText}>Almost there! Enter in the text verification code!</Text>
				</View>
				<View
					style={styles.verificationCodeView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.formCodeTwoView}>
							<TextInput
								autoCorrect={false}
								placeholder="4"
								style={styles.textInputTwoTextInput}/>
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
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 53,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.formCodeFiveView}>
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
									<Image
										source={require("./../../assets/images/number-box.png")}
										style={styles.numberBoxImage}/>
								</View>
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
										placeholder="0"
										style={styles.textInputFiveTextInput}/>
								</View>
							</View>
							<View
								style={styles.formCodeView}>
								<TextInput
									autoCorrect={false}
									placeholder="0"
									style={styles.textInputTextInput}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.formCodeThreeView}>
								<TextInput
									autoCorrect={false}
									placeholder="2"
									style={styles.textInputThreeTextInput}/>
							</View>
							<View
								style={styles.formCodeFourView}>
								<TextInput
									autoCorrect={false}
									placeholder="0"
									style={styles.textInputFourTextInput}/>
							</View>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onButtonsColorButtPressed}
					style={styles.buttonsColorButtButton}>
					<Text
						style={styles.buttonsColorButtButtonText}>Done!</Text>
				</TouchableOpacity>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.dontGetItText}>didn't get it?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onResendCodePressed}
						style={styles.resendCodeButton}>
						<Text
							style={styles.resendCodeButtonText}>Resend code</Text>
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
	menuButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 4,
		height: 20,
	},
	menuButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	menuButtonButtonImage: {
		resizeMode: "contain",
	},
	titlePageConfirmView: {
		backgroundColor: "transparent",
		height: 74,
		marginLeft: 20,
		marginRight: 16,
		marginTop: 17,
	},
	pageTitleText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
	},
	confirmationDescripText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	verificationCodeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 284,
		height: 53,
		marginTop: 51,
	},
	formCodeTwoView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		justifyContent: "center",
	},
	textInputTwoTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		height: 26,
		marginLeft: 20,
		marginRight: 20,
	},
	formCodeFiveView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 53,
	},
	textInputFiveTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		height: 26,
		marginLeft: 20,
		marginRight: 20,
	},
	formCodeView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		marginLeft: 6,
		justifyContent: "center",
	},
	textInputTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		height: 26,
		marginLeft: 20,
		marginRight: 20,
	},
	formCodeThreeView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		marginRight: 6,
		justifyContent: "center",
	},
	textInputThreeTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 26,
		marginLeft: 20,
		marginRight: 20,
	},
	formCodeFourView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		justifyContent: "center",
	},
	textInputFourTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 26,
		marginLeft: 20,
		marginRight: 20,
	},
	buttonsColorButtButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
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
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 44,
	},
	buttonsColorButtButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	loginLinkView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 148,
		height: 15,
		marginLeft: 25,
		marginTop: 27,
		flexDirection: "row",
		alignItems: "center",
	},
	dontGetItText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	resendCodeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 75,
		height: 15,
	},
})
