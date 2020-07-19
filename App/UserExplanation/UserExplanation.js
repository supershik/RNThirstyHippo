//
//  UserExplanation
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserExplanation extends React.Component {

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
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onBackButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onButtonsColorButtPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
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
					style={styles.itSPartyTimeText}>How it Works!</Text>
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
							source={require("./../../assets/images/background-22.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
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
										source={require("./../../assets/images/number-box.png")}
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
							<Text
								style={styles.stepThreeText}>Add beverages - Max 2</Text>
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
										source={require("./../../assets/images/number-box.png")}
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
							<Text
								style={styles.stepTwoText}>Find any Preorder Statio</Text>
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
									<Text
										style={styles.textText}>3</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.stepText}>Go to Bartender</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.step4View}>
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
										source={require("./../../assets/images/number-box.png")}
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
								style={styles.drinkNameText}>Press “Pick Up Preorder!”</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onButtonsColorButtPressed}
					style={styles.buttonsColorButtButton}>
					<Text
						style={styles.buttonsColorButtButtonText}>Add Drinks!</Text>
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
	itSPartyTimeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 256,
		marginLeft: 20,
		marginTop: 26,
	},
	step1View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 311,
		height: 280,
		marginTop: 32,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 280,
	},
	step1TwoView: {
		backgroundColor: "transparent",
		width: 264,
		height: 53,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeTwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 53,
	},
	textThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 19,
	},
	stepThreeText: {
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
	step2View: {
		backgroundColor: "transparent",
		width: 264,
		height: 53,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	step2TwoView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 53,
	},
	textTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
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
		width: 209,
	},
	step3View: {
		backgroundColor: "transparent",
		width: 264,
		height: 53,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 53,
	},
	textText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
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
	step4View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 53,
		flexDirection: "row",
		alignItems: "center",
	},
	formCodeThreeView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 53,
	},
	checkBoxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
