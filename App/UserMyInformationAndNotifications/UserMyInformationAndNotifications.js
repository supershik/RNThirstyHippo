//
//  UserMyInformationAndNotifications
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"


export default class UserMyInformationAndNotifications extends React.Component {

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
		
		navigate("UserMenu")
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onEmaiSwitchValueChanged = () => {
	
	}

	onPushSwitchValueChanged = () => {
	
	}

	onLocationSwitchValueChanged = () => {
	
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
						style={styles.infomationAndSettiView}>
						<Text
							style={styles.firstAndLastNameText}>First and Last Name</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 15,
								marginTop: 3,
							}}>
							<View
								style={styles.seperatorThreeView}/>
							<Text
								style={styles.userNameText}>Frank Reynolds</Text>
						</View>
						<Text
							style={styles.emailText}>Email</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 15,
								marginTop: 3,
							}}>
							<View
								style={styles.seperatorTwoView}/>
							<Text
								style={styles.userEmailText}>Frank@wolfcola.com</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 31,
								marginLeft: 4,
								marginTop: 16,
							}}>
							<Switch
								trackColor={{
									true: "rgb(0, 112, 247)",
									false: "rgb(0, 128, 255)",
								}}
								thumbColor="white"
								style={styles.pushSwitchSwitch}/>
							<Text
								style={styles.pushNotificationsText}>Push Notifications</Text>
						</View>
						<View
							style={styles.seperatorView}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 4,
								marginTop: 15,
								marginBottom: 3,
							}}>
							<Switch
								trackColor={{
									true: "rgb(0, 112, 247)",
									false: "rgb(0, 128, 255)",
								}}
								thumbColor="white"
								style={styles.emaiSwitchSwitch}/>
							<Text
								style={styles.emailReceiptsText}>Email Receipts</Text>
						</View>
						<View
							style={styles.seperatorFourView}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 31,
								marginLeft: 4,
							}}>
							<Text
								style={styles.useLocationText}>Use Location</Text>
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
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
	},
	pocketButtonText: {
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
		height: 24,
		marginRight: 2,
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
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 221,
		marginLeft: 20,
		marginTop: 23,
	},
	myInformationView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 317,
		height: 300,
		marginTop: 32,
		justifyContent: "center",
	},
	infomationAndSettiView: {
		backgroundColor: "transparent",
		height: 238,
		marginLeft: 20,
		marginRight: 20,
	},
	firstAndLastNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 4,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 14,
		height: 1,
	},
	userNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		position: "absolute",
		left: 4,
		right: 0,
		top: 0,
	},
	emailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 4,
		marginTop: 22,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 14,
		height: 1,
	},
	userEmailText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		left: 4,
		right: 0,
		top: 0,
	},
	pushSwitchSwitch: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 30,
		width: 51,
		top: 0,
		height: 31,
	},
	pushNotificationsText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		position: "absolute",
		left: 0,
		right: 0,
		top: 6,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginTop: 9,
	},
	emaiSwitchSwitch: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 30,
		width: 51,
		bottom: 0,
		height: 31,
	},
	emailReceiptsText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 5,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginBottom: 15,
	},
	useLocationText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 7,
	},
	locationSwitchSwitch: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 30,
		width: 51,
		bottom: 0,
		height: 31,
	},
})
