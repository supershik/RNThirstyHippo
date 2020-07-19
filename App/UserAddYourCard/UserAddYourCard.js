//
//  UserAddYourCard
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class UserAddYourCard extends React.Component {

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

	onCartButtonPressed = () => {
	
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onMenuButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onSaveButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder1Item")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 26,
						marginLeft: 36,
						marginRight: 28,
						marginTop: 53,
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
					<TouchableOpacity
						onPress={this.onCartButtonPressed}
						style={styles.cartButtonButton}>
						<Image
							source={require("./../../assets/images/pocket-2.png")}
							style={styles.cartButtonButtonImage}/>
					</TouchableOpacity>
				</View>
				<Text
					style={styles.pageTitleText}>Add Your Card</Text>
				<ScrollView
					style={styles.creditCardScrollView}>
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
							source={require("./../../assets/images/background-5.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							top: 32,
							bottom: 169,
						}}>
						<View
							style={styles.firstNameView}>
							<Text
								style={styles.firstNameText}>First Name</Text>
							<TextInput
								autoCorrect={false}
								placeholder="Charlie"
								style={styles.inputLastNameTwoTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorSixView}/>
						</View>
						<View
							style={styles.lastNameView}>
							<Text
								style={styles.lastNameText}>Last Name</Text>
							<TextInput
								autoCorrect={false}
								placeholder="Kelly"
								style={styles.inputLastNameTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorFiveView}/>
						</View>
						<View
							style={styles.creditCardNumberView}>
							<Text
								style={styles.creditCardText}>Credit Card Number</Text>
							<TextInput
								autoCorrect={false}
								placeholder="**** **** ***** 1992"
								style={styles.inputCreditCardNuTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorFourView}/>
						</View>
						<View
							style={styles.expirationDateView}>
							<Text
								style={styles.expirationDateText}>Expiration Date</Text>
							<TextInput
								autoCorrect={false}
								placeholder="04/20"
								style={styles.inputDateIE042TextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorThreeView}/>
						</View>
						<View
							style={styles.zipCodeView}>
							<Text
								style={styles.zipCodeText}>Zip Code</Text>
							<TextInput
								autoCorrect={false}
								placeholder="30326"
								style={styles.inputZipCodeIETextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorTwoView}/>
						</View>
						<View
							style={styles.emailView}>
							<Text
								style={styles.emailText}>Email</Text>
							<TextInput
								autoCorrect={false}
								placeholder="Charlie@wolfcola.com"
								style={styles.inputEmailTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.dataStoredByGooglText}>Data Stored by Google. Encryption Powered by NMI</Text>
					</View>
				</ScrollView>
				<TouchableOpacity
					onPress={this.onSaveButtonPressed}
					style={styles.saveButtonButton}>
					<Text
						style={styles.saveButtonButtonText}>Save!</Text>
				</TouchableOpacity>
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
		marginTop: 6,
	},
	backButtonButtonImage: {
		resizeMode: "contain",
	},
	backButtonButtonText: {
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
		marginRight: 35,
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
	menuButtonButtonImage: {
		resizeMode: "contain",
	},
	cartButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22,
		height: 26,
	},
	cartButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	cartButtonButtonImage: {
		resizeMode: "contain",
	},
	pageTitleText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		alignSelf: "flex-start",
		width: 256,
		marginLeft: 20,
		marginTop: 23,
	},
	creditCardScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 32,
		marginBottom: 32,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		borderRadius: 14,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 388,
	},
	firstNameView: {
		backgroundColor: "transparent",
		height: 42,
	},
	firstNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputLastNameTwoTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 13,
		marginTop: 6,
	},
	seperatorSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	lastNameView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	lastNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputLastNameTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 13,
		marginTop: 6,
	},
	seperatorFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	creditCardNumberView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	creditCardText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputCreditCardNuTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 13,
		marginTop: 6,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	expirationDateView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	expirationDateText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputDateIE042TextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 13,
		marginTop: 6,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	zipCodeView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	zipCodeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputZipCodeIETextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 13,
		marginTop: 6,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	emailView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	emailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputEmailTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 13,
		marginTop: 6,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	dataStoredByGooglText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.12,
		backgroundColor: "transparent",
	},
	saveButtonButton: {
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
		marginBottom: 17,
	},
	saveButtonButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	saveButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
