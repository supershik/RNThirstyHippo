//
//  AdminError
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class AdminError extends React.Component {

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

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 210,
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
							style={styles.pageTitleText}>Whoops!</Text>
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
					style={styles.contactUsSectionView}>
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
								height: 17,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/arrow-right-icon.png")}
								style={styles.arrowRightIconTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.helpThecantainerCoText}>wsdoxey@gmail.com</Text>
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
						<Text
							style={styles.emailOrCallUsText}>Email or Call us at:</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 17,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/arrow-right-icon.png")}
								style={styles.arrowRightIconImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.phoneNumberText}>912-536-6544</Text>
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
		height: 210,
	},
	pageTitleText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 306,
		marginTop: 49,
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
	contactUsSectionView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 312,
		height: 103,
		marginLeft: 19,
		marginTop: 37,
	},
	arrowRightIconTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 11,
	},
	helpThecantainerCoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		width: 286,
	},
	emailOrCallUsText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	arrowRightIconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 11,
		marginBottom: 6,
	},
	phoneNumberText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		width: 286,
	},
})
