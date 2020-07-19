//
//  AdminCreateEvent
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class AdminCreateEvent extends React.Component {

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

	onDrawLocationPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminDrawEventLocation")
	}

	onPocketPressed = () => {
	
	}

	onMenuButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onCreateEventButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminCreatePreorderMenu")
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
					style={styles.pageTitleCreateText}>Create Event!</Text>
				<TouchableOpacity
					onPress={this.onDrawLocationPressed}
					style={styles.drawLocationButton}>
					<Image
						source={require("./../../assets/images/map-pin.png")}
						style={styles.drawLocationButtonImage}/>
					<Text
						style={styles.drawLocationButtonText}>Draw{"\n"}Location</Text>
				</TouchableOpacity>
				<View
					style={styles.formLineView}>
					<Text
						style={styles.eventNameText}>Event Name</Text>
					<TextInput
						autoCorrect={false}
						placeholder="Music Midtown"
						style={styles.inputEventNameTextInput}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.lineView}/>
				</View>
				<ScrollView
					style={styles.formScrollView}>
					<View
						style={styles.addEventFormView}>
						<View
							style={styles.addressView}>
							<Text
								style={styles.addressText}>Address</Text>
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
									placeholder="123 Big Event Street"
									style={styles.inputAddressTextInput}/>
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
									style={styles.inputCityTextInput}/>
							</View>
						</View>
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
									style={styles.inputStateTextInput}/>
							</View>
						</View>
						<View
							style={styles.zipView}>
							<Text
								style={styles.zipText}>Zip Code</Text>
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
									style={styles.inputZipCodeTextInput}/>
							</View>
						</View>
						<View
							style={styles.dateView}>
							<Text
								style={styles.dateText}>Date</Text>
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
									style={styles.seperatorThreeView}/>
								<TextInput
									autoCorrect={false}
									placeholder="04/20/20XX"
									style={styles.inputDateTextInput}/>
							</View>
						</View>
						<View
							style={styles.lengthOfEventView}>
							<Text
								style={styles.lengthOfEventText}>Length of Event</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 15,
									marginRight: 1,
								}}>
								<View
									style={styles.seperatorTwoView}/>
								<Text
									style={styles.hoursText}>Hours</Text>
								<TextInput
									autoCorrect={false}
									placeholder="3"
									style={styles.inputHoursTextInput}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.maxBeveragesView}>
							<Text
								style={styles.maxBeveragesText}>Max Beverage</Text>
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
									style={styles.seperatorView}/>
								<TextInput
									autoCorrect={false}
									placeholder="3"
									style={styles.inputMaxBeveragesTextInput}/>
							</View>
						</View>
						<View
							style={styles.serviceFeeView}>
							<Text
								style={styles.serviceFeeText}>Service Fee</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									marginRight: 1,
								}}>
								<View
									style={styles.seperatorEightView}/>
								<TextInput
									autoCorrect={false}
									placeholder="10"
									style={styles.inputServiceFeeTextInput}/>
								<Text
									style={styles.textText}>$</Text>
							</View>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity
					onPress={this.onCreateEventButtonPressed}
					style={styles.createEventButtonButton}>
					<Text
						style={styles.createEventButtonButtonText}>Create Event!</Text>
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
		marginRight: 35,
		marginTop: 3,
	},
	menuButtonButtonImage: {
		resizeMode: "contain",
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
	pageTitleCreateText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 270,
		marginLeft: 20,
		marginTop: 23,
	},
	drawLocationButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 121,
		height: 51,
		marginRight: 10,
		marginTop: 2,
	},
	drawLocationButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	drawLocationButtonImage: {
		resizeMode: "contain",
		marginRight: 9,
	},
	formLineView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 11,
	},
	eventNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputEventNameTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		height: 18,
		marginTop: 12,
	},
	lineView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	formScrollView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 25,
		marginBottom: 14,
	},
	addEventFormView: {
		backgroundColor: "transparent",
		height: 385,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 32,
	},
	addressView: {
		backgroundColor: "transparent",
		height: 35,
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
	inputAddressTextInput: {
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
	cityView: {
		backgroundColor: "transparent",
		height: 35,
		marginTop: 15,
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
	inputCityTextInput: {
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
	stateView: {
		backgroundColor: "transparent",
		height: 35,
		marginTop: 15,
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
	inputStateTextInput: {
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
	zipView: {
		backgroundColor: "transparent",
		height: 35,
		marginTop: 15,
	},
	zipText: {
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
	inputZipCodeTextInput: {
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
	dateView: {
		backgroundColor: "transparent",
		height: 35,
		marginTop: 15,
	},
	dateText: {
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
	inputDateTextInput: {
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
	lengthOfEventView: {
		backgroundColor: "transparent",
		height: 35,
		marginTop: 15,
	},
	lengthOfEventText: {
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
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	hoursText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		width: 41,
		bottom: 0,
	},
	inputHoursTextInput: {
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
		width: 41,
		bottom: 0,
		height: 15,
	},
	maxBeveragesView: {
		backgroundColor: "transparent",
		height: 35,
		marginBottom: 15,
	},
	maxBeveragesText: {
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
		bottom: 0,
		height: 1,
	},
	inputMaxBeveragesTextInput: {
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
	serviceFeeView: {
		backgroundColor: "transparent",
		height: 35,
	},
	serviceFeeText: {
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
	seperatorEightView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	inputServiceFeeTextInput: {
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
		width: 50,
		bottom: 0,
		height: 15,
	},
	textText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		width: 13,
		bottom: 1,
	},
	createEventButtonButton: {
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
		marginBottom: 15,
	},
	createEventButtonButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	createEventButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
