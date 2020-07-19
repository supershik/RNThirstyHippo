//
//  UserWelcome
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserWelcome extends React.Component {

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
		this.state = {
			theCantainerHippImageTranslateY: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationOne()
	}

	onNextButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserEnterPhoneNumber")
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.theCantainerHippImageTranslateY.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.theCantainerHippImageTranslateY, {
			duration: 1000,
			easing: Easing.bezier(0, 0, 1, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.thirtsyHippoAndEView}>
					<Text
						style={styles.theCantainerText}>Thirsty Hippo</Text>
					<Text
						style={styles.welcomeToPreorderText}>Easiest and Fastest Preorder Beverage App</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onNextButtonPressed}
						style={styles.nextButtonButton}>
						<Text
							style={styles.nextButtonButtonText}>Next</Text>
					</TouchableOpacity>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Animated.View
						style={[{
							transform: [{
								translateY: this.state.theCantainerHippImageTranslateY.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: [0.01, -750, 0],
								}),
							}],
						}, styles.theCantainerHippImageAnimated]}>
						<Image
							source={require("./../../assets/images/the-cantainer---hippo-icon.png")}
							style={styles.theCantainerHippImage}/>
					</Animated.View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(0, 112, 247)",
		flex: 1,
	},
	thirtsyHippoAndEView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		width: 292,
		bottom: 24,
		height: 118,
	},
	theCantainerText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
	},
	welcomeToPreorderText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginRight: 5,
		marginTop: 2,
	},
	nextButtonButton: {
		backgroundColor: "transparent",
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "white",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 162,
		height: 50,
	},
	nextButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	nextButtonButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	theCantainerHippImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	theCantainerHippImageAnimated: {
		width: 125,
		height: 125,
	},
})
