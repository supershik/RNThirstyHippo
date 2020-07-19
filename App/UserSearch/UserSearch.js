//
//  UserSearch
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class UserSearch extends React.Component {

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

	onEventLogoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
	}

	onEventLogoTwoPressed = () => {
	
	}

	onEventLogoThreePressed = () => {
	
	}

	onEventLogoFourPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 40,
						marginLeft: 20,
						marginRight: 28,
						marginTop: 46,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.searchBoxView}>
						<TextInput
							autoCorrect={false}
							style={styles.searchIconTextInput}/>
					</View>
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
					style={styles.pageTitleText}>Search</Text>
				<ScrollView
					style={styles.allEventsScrollView}>
					<View
						style={styles.eventView}>
						<TouchableOpacity
							onPress={this.onEventLogoPressed}
							style={styles.eventLogoButton}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventText}>City, State</Text>
							<Text
								style={styles.dateOfEventText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorImage}/>
						</View>
					</View>
					<View
						style={styles.eventTwoView}>
						<TouchableOpacity
							onPress={this.onEventLogoTwoPressed}
							style={styles.eventLogoTwoButton}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventTwoText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventTwoText}>City, State</Text>
							<Text
								style={styles.dateOfEventTwoText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorTwoImage}/>
						</View>
					</View>
					<View
						style={styles.eventThreeView}>
						<TouchableOpacity
							onPress={this.onEventLogoThreePressed}
							style={styles.eventLogoThreeButton}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventThreeText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventThreeText}>City, State</Text>
							<Text
								style={styles.dateOfEventThreeText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorThreeImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.eventFourView}>
						<TouchableOpacity
							onPress={this.onEventLogoFourPressed}
							style={styles.eventLogoFourButton}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventFourText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventFourText}>City, State</Text>
							<Text
								style={styles.dateOfEventFourText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorFourImage}/>
						</View>
					</View>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		alignItems: "flex-start",
	},
	searchBoxView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(107, 127, 153, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 155,
		height: 40,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	searchIconTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 135,
		height: 17,
		marginLeft: 9,
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
		marginTop: 10,
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
		marginTop: 7,
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
	pageTitleText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 109,
		marginLeft: 20,
		marginTop: 16,
	},
	allEventsScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 32,
	},
	eventView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		flexDirection: "row",
		alignItems: "center",
	},
	eventLogoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventLogoButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	eventLogoButtonImage: {
		resizeMode: "contain",
	},
	nameOfEventText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	dateOfEventText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 3,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 2,
	},
	eventTwoView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "center",
	},
	eventLogoTwoButtonImage: {
		resizeMode: "contain",
	},
	eventLogoTwoButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	eventLogoTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nameOfEventTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	dateOfEventTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 3,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 2,
	},
	eventThreeView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoThreeButtonImage: {
		resizeMode: "contain",
	},
	eventLogoThreeButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	eventLogoThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nameOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		width: 173,
	},
	cityStateOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 2,
	},
	dateOfEventThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 3,
	},
	seperatorThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 2,
	},
	eventFourView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		marginBottom: 151,
		flexDirection: "row",
		alignItems: "center",
	},
	eventLogoFourButtonImage: {
		resizeMode: "contain",
	},
	eventLogoFourButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	eventLogoFourButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nameOfEventFourText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	dateOfEventFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 3,
	},
	seperatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 2,
	},
})
