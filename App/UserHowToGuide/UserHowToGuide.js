//
//  UserHowToGuide
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserHowToGuide extends React.Component {

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
							style={styles.pageTitleSupportText}>How to Guide:</Text>
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
					style={styles.step1View}>
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
							source={require("./../../assets/images/background-20.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							width: 275,
							top: 21,
							bottom: 20,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.step1TwoView}>
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
									alignSelf: "flex-end",
									width: 200,
									height: 31,
									marginBottom: 4,
								}}>
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
										style={styles.stepThreeText}>Add beverages - Max 2</Text>
								</View>
								<Text
									style={styles.inputDrinkNameThreeText}>Press “Create Preorder!”</Text>
							</View>
						</View>
						<View
							style={styles.step2View}>
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
										style={styles.textTwoText}>2</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-end",
									width: 212,
									height: 48,
									marginBottom: 4,
								}}>
								<Text
									style={styles.inputDrinkNameTwoText}>Doesn’t matter which one!</Text>
								<Text
									style={styles.stepTwoText}>Find any Preorder Station</Text>
							</View>
						</View>
						<View
							style={styles.step3View}>
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
									width: 200,
									height: 31,
									marginBottom: 4,
								}}>
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
										style={styles.stepText}>Go to Bartender</Text>
								</View>
								<Text
									style={styles.inputDrinkNameText}>Must be 12’ inches from Bartender</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.step4View}>
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
									style={styles.drinkNameText}>Press “Pick Up Preorder!”</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: -13,
									bottom: 1,
									height: 52,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
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
										<Image
											source={require("./../../assets/images/check-box.png")}
											style={styles.checkBoxImage}/>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFourText}>Touchless Order & Contactless Payment</Text>
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
	pageTitleSupportText: {
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
		marginTop: 6,
	},
	backButtonButtonText: {
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
	pocketButtonImage: {
		resizeMode: "contain",
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
	pocketButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	step1View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 317,
		height: 291,
		marginTop: 33,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 291,
	},
	step1TwoView: {
		backgroundColor: "transparent",
		width: 263,
		height: 52,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeTwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 52,
	},
	numberBoxThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		width: 200,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 6,
		width: 194,
		bottom: 0,
	},
	step2View: {
		backgroundColor: "transparent",
		width: 275,
		height: 52,
		marginTop: 14,
		flexDirection: "row",
		alignItems: "center",
	},
	step2TwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 52,
	},
	numberBoxTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 18,
		width: 194,
		bottom: 0,
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
		position: "absolute",
		right: 0,
		width: 212,
		top: 0,
	},
	step3View: {
		backgroundColor: "transparent",
		width: 263,
		height: 52,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	formCodeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 52,
		height: 52,
	},
	numberBoxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 200,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 6,
		width: 194,
		bottom: 0,
	},
	step4View: {
		backgroundColor: "transparent",
		width: 270,
		height: 53,
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
	formCodeThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 52,
		height: 52,
	},
	numberBoxFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 52,
	},
	checkBoxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 20,
		marginLeft: 15,
		marginRight: 15,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 220,
	},
})
