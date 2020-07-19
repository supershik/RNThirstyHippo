//
//  AdminHowToGuide
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class AdminHowToGuide extends React.Component {

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

	onPocketPressed = () => {
	
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
						height: 212,
					}}>
					<View
						style={styles.titleSearchPartView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 30,
							top: 53,
							height: 81,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.pageTitleSupporrText}>How to Guide</Text>
						<TouchableOpacity
							onPress={this.onBackButtonPressed}
							style={styles.backButtonButton}>
							<Image
								source={require("./../../assets/images/back-button-2.png")}
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
								source={require("./../../assets/images/menu-button-2.png")}
								style={styles.menuButtonButtonImage}/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={this.onPocketPressed}
							style={styles.pocketButton}>
							<Image
								source={require("./../../assets/images/pocket.png")}
								style={styles.pocketButtonImage}/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.stepsView}>
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
							source={require("./../../assets/images/background-21.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							width: 275,
							top: 21,
							bottom: 21,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.step1View}>
							<View
								style={styles.formCodeThreeView}>
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
										source={require("./../../assets/images/number-box-2.png")}
										style={styles.numberBoxFourImage}/>
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
									<Text
										style={styles.textThreeText}>1</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 200,
									height: 46,
								}}>
								<Text
									style={styles.stepThreeText}>Receive Order</Text>
								<Text
									style={styles.inputDrinkNameFourText}>Ask customer to Press “Pick Up Preorder!” Must be within 12’ inches!</Text>
							</View>
						</View>
						<View
							style={styles.step2View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.inputDrinkNameThreeText}>Make sure user is 21+</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									height: 52,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View
									style={styles.step2TwoView}>
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
											source={require("./../../assets/images/number-box-2.png")}
											style={styles.numberBoxThreeImage}/>
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
										<Text
											style={styles.textTwoText}>2</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.stepTwoText}>Check ID</Text>
							</View>
						</View>
						<View
							style={styles.step3View}>
							<View
								style={styles.formCodeTwoView}>
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
										source={require("./../../assets/images/number-box-2.png")}
										style={styles.numberBoxTwoImage}/>
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
									<Text
										style={styles.textText}>3</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 200,
									height: 47,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.stepText}>Review Order</Text>
								<Text
									style={styles.inputDrinkNameTwoText}>Ask user’s name, confirm order, and suggest another drink</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.step4View}>
							<View
								style={styles.formCodeView}>
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
										source={require("./../../assets/images/number-box-2.png")}
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
									<Image
										source={require("./../../assets/images/check-box.png")}
										style={styles.checkBoxImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 207,
									height: 49,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.drinkNameText}>Press “Confirm Pick Up!”</Text>
								<Text
									style={styles.inputDrinkNameText}>This charges customer by “Touchless Order & Contactless Payment”</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	titleSearchPartView: {
		backgroundColor: "rgb(0, 112, 247)",
		shadowColor: "rgba(107, 127, 153, 0.3)",
		shadowRadius: 15,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 212,
	},
	pageTitleSupporrText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 306,
		marginTop: 49,
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
		marginTop: 6,
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
		marginRight: 35,
		marginTop: 3,
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
	pocketButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 20,
		height: 24,
	},
	pocketButtonImage: {
		resizeMode: "contain",
	},
	pocketButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	stepsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 317,
		height: 291,
		marginTop: 35,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 291,
	},
	step1View: {
		backgroundColor: "transparent",
		width: 263,
		height: 52,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	formCodeThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 52,
		height: 52,
	},
	numberBoxFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		marginLeft: 20,
		marginRight: 19,
	},
	stepThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		position: "absolute",
		right: 0,
		width: 200,
		top: 0,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 200,
		top: 17,
	},
	step2View: {
		backgroundColor: "transparent",
		width: 275,
		height: 52,
		marginTop: 14,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 194,
		marginRight: 18,
	},
	step2TwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 52,
	},
	numberBoxThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		marginLeft: 20,
		marginRight: 19,
	},
	stepTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		alignSelf: "flex-start",
		width: 212,
	},
	step3View: {
		backgroundColor: "transparent",
		width: 263,
		height: 52,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeTwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 52,
	},
	numberBoxTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		marginLeft: 20,
		marginRight: 19,
	},
	stepText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 200,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 194,
		marginRight: 6,
	},
	step4View: {
		backgroundColor: "transparent",
		width: 270,
		height: 52,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeView: {
		backgroundColor: "transparent",
		width: 52,
		height: 52,
	},
	numberBoxImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	checkBoxImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 20,
		marginLeft: 15,
		marginRight: 15,
	},
	drinkNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 207,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 207,
		marginTop: 2,
	},
})
