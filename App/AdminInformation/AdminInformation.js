//
//  AdminInformation
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"


export default class AdminInformation extends React.Component {

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
	
		const { navigate } = this.props.navigation
		
		navigate("AdminMenu")
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onLocationSwitchValueChanged = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
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
					<View
						style={styles.cartButtonView}>
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
							<TouchableOpacity
								onPress={this.onPocketPressed}
								style={styles.pocketButton}>
								<Image
									source={require("./../../assets/images/pocket-2.png")}
									style={styles.pocketButtonImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={styles.ovalView}/>
					</View>
				</View>
				<Text
					style={styles.pageTitleMyInfoText}>My Information</Text>
				<View
					style={styles.myInformationView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.titleView}>
							<Text
								style={styles.titleText}>Title</Text>
							<Text
								style={styles.inputedTitleOfUseText}>VP of Worldwide Distribution</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorView}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 21,
							right: 20,
							top: 32,
							bottom: 30,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.companyNameText}>Wolf Cola</Text>
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
							<View
								style={styles.seperatorTwoView}/>
						</View>
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
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.seperatorThreeView}/>
						<View
							style={styles.locationView}>
							<Text
								style={styles.useLocationText}>Use Location</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Switch
								trackColor={{
									true: "rgb(0, 112, 247)",
									false: "rgb(0, 128, 255)",
								}}
								thumbColor="white"
								style={styles.locationSwitchSwitch}/>
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
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
	},
	pocketButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 24,
		marginRight: 2,
	},
	pocketButtonText: {
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
	ovalView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 4,
		position: "absolute",
		left: 14,
		right: 0,
		bottom: 0,
		height: 8,
	},
	pageTitleMyInfoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 311,
		marginLeft: 20,
		marginTop: 23,
	},
	myInformationView: {
		backgroundColor: "white",
		borderRadius: 20,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 318,
		height: 289,
		marginTop: 32,
	},
	titleView: {
		backgroundColor: "transparent",
		width: 277,
		height: 51,
		marginRight: 20,
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
	inputedTitleOfUseText: {
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
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginRight: 10,
	},
	companyNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.08,
		backgroundColor: "transparent",
		width: 277,
	},
	nameView: {
		backgroundColor: "transparent",
		width: 277,
		height: 51,
		marginTop: 7,
	},
	nameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
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
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginRight: 10,
	},
	emailView: {
		backgroundColor: "transparent",
		width: 276,
		height: 40,
		marginTop: 75,
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
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		alignSelf: "flex-start",
		width: 267,
		height: 1,
		marginBottom: 12,
	},
	locationView: {
		backgroundColor: "transparent",
		width: 276,
		height: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	useLocationText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		width: 138,
	},
	locationSwitchSwitch: {
		backgroundColor: "transparent",
		width: 52,
		height: 31,
		marginRight: 43,
	},
})
