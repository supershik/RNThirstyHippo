//
//  AdminSignUpInformation
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class AdminSignUpInformation extends React.Component {

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

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onButtonsColorButtPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminMenu")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 20,
						marginLeft: 36,
						marginRight: 85,
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
					style={styles.pageTitleSignUpText}>Sign Up Information</Text>
				<ScrollView
					style={styles.allAdminSignUpInScrollView}>
					<View
						style={styles.companyInformationView}>
						<TextInput
							autoCorrect={false}
							placeholder="Company Name"
							style={styles.companyNameTextInput}/>
						<View
							style={styles.nameView}>
							<Text
								style={styles.nameText}>Name</Text>
							<Text
								style={styles.inputedNameOfUserText}>Dennis Reynolds</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/seperator-2.png")}
								style={styles.seperatorImage}/>
						</View>
						<View
							style={styles.titleView}>
							<Text
								style={styles.titleText}>Title</Text>
							<TextInput
								autoCorrect={false}
								placeholder="VP of Worldwide Distribution"
								style={styles.inputedTitleOfUseTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorEightView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.emailView}>
							<Text
								style={styles.eMailText}>E-mail</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputedUserEmailText}>Dennis@wolfcola.com</Text>
						</View>
					</View>
					<View
						style={styles.addressView}>
						<View
							style={styles.addressTwoView}>
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
									style={styles.stateView}>
									<Text
										style={styles.stateText}>State</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 15,
										}}>
										<View
											style={styles.seperatorFiveView}/>
										<TextInput
											autoCorrect={false}
											placeholder="Georgia"
											style={styles.usersInputedStateTextInput}/>
									</View>
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
									style={styles.addressThreeView}>
									<Text
										style={styles.addressText}>Street Address</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 15,
										}}>
										<View
											style={styles.seperatorSevenView}/>
										<TextInput
											autoCorrect={false}
											placeholder="123 Big Money Lane"
											style={styles.userInputedAddressTextInput}/>
									</View>
								</View>
								<View
									style={styles.cityView}>
									<Text
										style={styles.cityText}>City</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 15,
										}}>
										<View
											style={styles.seperatorSixView}/>
										<TextInput
											autoCorrect={false}
											placeholder="Atlanta"
											style={styles.usersInputedCityTextInput}/>
									</View>
								</View>
								<View
									style={styles.zipCodeView}>
									<Text
										style={styles.zipCodeText}>Zip Code</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 15,
										}}>
										<View
											style={styles.seperatorFourView}/>
										<TextInput
											autoCorrect={false}
											placeholder="30326"
											style={styles.usersInputedZipCoTextInput}/>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.phoneNumberView}>
									<Text
										style={styles.phoneNumberText}>Phone Number</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<TextInput
										autoCorrect={false}
										placeholder="(404) - 867-5309"
										style={styles.usersInputedPhoneTextInput}/>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.routingNumberAndIView}>
						<View
							style={styles.routingNumberView}>
							<Text
								style={styles.routingNumberText}>Routing Number</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorThreeView}/>
								<TextInput
									autoCorrect={false}
									placeholder="061092387"
									style={styles.inputRoutingNumberTextInput}/>
							</View>
						</View>
						<View
							style={styles.accountNumberView}>
							<Text
								style={styles.accountNumberText}>Account Number</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorTwoView}/>
								<TextInput
									autoCorrect={false}
									placeholder="012345678"
									style={styles.inputAccountNumberTextInput}/>
							</View>
						</View>
						<View
							style={styles.bankNameView}>
							<Text
								style={styles.bankNameText}>Bank Name</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorView}/>
								<TextInput
									autoCorrect={false}
									placeholder="Sweetwater Bank"
									style={styles.inputBankNameTextInput}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.bankAddressView}>
							<Text
								style={styles.bankAddressText}>Bank Address</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<TextInput
								autoCorrect={false}
								placeholder="420 Lane Atlanta, Georgia 30326"
								style={styles.inputBankAddressTextInput}/>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity
					onPress={this.onButtonsColorButtPressed}
					style={styles.buttonsColorButtButton}>
					<Text
						style={styles.buttonsColorButtButtonText}>Save!</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	backButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 281,
		marginLeft: 20,
		marginTop: 26,
	},
	allAdminSignUpInScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 32,
		marginBottom: 26,
	},
	companyInformationView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 252,
	},
	companyNameTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 17,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	nameView: {
		backgroundColor: "transparent",
		height: 51,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 7,
	},
	nameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	inputedNameOfUserText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		marginTop: 8,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 10,
	},
	titleView: {
		backgroundColor: "transparent",
		height: 51,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 12,
	},
	titleText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
	},
	inputedTitleOfUseTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 15,
		marginTop: 8,
	},
	seperatorEightView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginRight: 10,
	},
	emailView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 276,
		height: 40,
		marginLeft: 20,
		marginBottom: 30,
	},
	eMailText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputedUserEmailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	addressView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 302,
		marginTop: 10,
		justifyContent: "center",
	},
	addressTwoView: {
		backgroundColor: "transparent",
		height: 265,
		marginLeft: 20,
		marginRight: 19,
	},
	stateView: {
		backgroundColor: "transparent",
		height: 37,
	},
	stateText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	usersInputedStateTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 15,
	},
	addressThreeView: {
		backgroundColor: "transparent",
		height: 37,
	},
	addressText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorSevenView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	userInputedAddressTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 15,
	},
	cityView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 20,
	},
	cityText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	usersInputedCityTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 15,
	},
	zipCodeView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 77,
	},
	zipCodeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	usersInputedZipCoTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 15,
	},
	phoneNumberView: {
		backgroundColor: "transparent",
		height: 37,
		marginLeft: 3,
		marginRight: 1,
	},
	phoneNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	usersInputedPhoneTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 15,
	},
	routingNumberAndIView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 270,
	},
	routingNumberView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 32,
	},
	routingNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	inputRoutingNumberTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 17,
	},
	accountNumberView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 22,
	},
	accountNumberText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 3,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	inputAccountNumberTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 17,
	},
	bankNameView: {
		backgroundColor: "transparent",
		height: 37,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 22,
	},
	bankNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 3,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 2,
		height: 1,
	},
	inputBankNameTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
		height: 17,
	},
	bankAddressView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 274,
		height: 37,
		marginRight: 20,
		marginBottom: 30,
	},
	bankAddressText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	inputBankAddressTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 17,
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
		marginBottom: 17,
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
})
