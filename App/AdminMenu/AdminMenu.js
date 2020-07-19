//
//  AdminMenu
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class AdminMenu extends React.Component {

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

	onSupportFAQsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminHowToGuide")
	}

	onPrivacyPolicyPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminPrivacyPolicy")
	}

	onContactPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminContact")
	}

	onLiveEventsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminEvents")
	}

	onProfileAndSettingsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminProfileAndSettings")
	}

	onCreateEventPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminCreateEvent")
	}

	onTextPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserWelcome")
	}

	onLogoutPressed = () => {
	
	}

	onPocketPressed = () => {
	
	}

	onMenuButtonPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.menuListView}>
					<View
						style={styles.menuView}>
						<View
							style={styles.createEventView}>
							<Image
								source={require("./../../assets/images/search.png")}
								style={styles.searchImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onCreateEventPressed}
								style={styles.createEventButton}>
								<Text
									style={styles.createEventButtonText}>CREATE EVENT</Text>
							</TouchableOpacity>
						</View>
						<View
							style={styles.profileAndSettingsView}>
							<Image
								source={require("./../../assets/images/profile-and-settings.png")}
								style={styles.profileAndSettingsImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onProfileAndSettingsPressed}
								style={styles.profileAndSettingsButton}>
								<Text
									style={styles.profileAndSettingsButtonText}>PROFILE AND SETTINGS</Text>
							</TouchableOpacity>
						</View>
						<View
							style={styles.eventsView}>
							<Image
								source={require("./../../assets/images/map-pin-2.png")}
								style={styles.mapPinImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onLiveEventsPressed}
								style={styles.eventsButton}>
								<Text
									style={styles.eventsButtonText}>EVENTS</Text>
							</TouchableOpacity>
						</View>
						<View
							style={styles.contactView}>
							<Image
								source={require("./../../assets/images/message-square.png")}
								style={styles.messageSquareImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onContactPressed}
								style={styles.contactButton}>
								<Text
									style={styles.contactButtonText}>CONTACT</Text>
							</TouchableOpacity>
						</View>
						<View
							style={styles.logoutView}>
							<TouchableOpacity
								onPress={this.onLogoutPressed}
								style={styles.logoutButton}>
								<Image
									source={require("./../../assets/images/logout.png")}
									style={styles.logoutButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onTextPressed}
								style={styles.textButton}>
								<Text
									style={styles.textButtonText}>LOGOUT</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onPrivacyPolicyPressed}
							style={styles.privacyPolicyButton}>
							<Text
								style={styles.privacyPolicyButtonText}>Privacy Policy</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={this.onSupportFAQsPressed}
							style={styles.howToGuideButton}>
							<Text
								style={styles.howToGuideButtonText}>How to Guide</Text>
						</TouchableOpacity>
					</View>
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
				<TouchableOpacity
					onPress={this.onPocketPressed}
					style={styles.pocketButton}>
					<Image
						source={require("./../../assets/images/pocket-2.png")}
						style={styles.pocketButtonImage}/>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	menuListView: {
		backgroundColor: "rgba(0, 112, 247, 0.9)",
		borderWidth: 1,
		borderColor: "rgba(107, 127, 153, 0.2)",
		borderStyle: "solid",
		shadowColor: "rgba(107, 127, 153, 0.5)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "stretch",
		width: 224,
		alignItems: "flex-end",
	},
	menuView: {
		backgroundColor: "transparent",
		width: 191,
		height: 366,
		marginRight: 1,
		marginTop: 169,
		alignItems: "flex-start",
	},
	createEventView: {
		backgroundColor: "transparent",
		width: 134,
		height: 18,
		flexDirection: "row",
		alignItems: "center",
	},
	searchImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 16,
	},
	createEventButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 105,
		height: 15,
		marginRight: 6,
	},
	createEventButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	createEventButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	profileAndSettingsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 18,
		marginTop: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	profileAndSettingsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 17,
	},
	profileAndSettingsButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	profileAndSettingsButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 162,
		height: 15,
		marginRight: 8,
	},
	profileAndSettingsButtonText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventsView: {
		backgroundColor: "transparent",
		width: 118,
		height: 20,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	mapPinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 20,
	},
	eventsButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 52,
		height: 15,
		marginRight: 37,
		marginTop: 5,
	},
	eventsButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventsButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	contactView: {
		backgroundColor: "transparent",
		width: 96,
		height: 19,
		marginTop: 28,
		flexDirection: "row",
		alignItems: "center",
	},
	messageSquareImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 19,
		height: 19,
	},
	contactButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 67,
		height: 15,
	},
	contactButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	contactButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	logoutView: {
		backgroundColor: "transparent",
		width: 85,
		height: 18,
		marginLeft: 1,
		marginTop: 27,
		flexDirection: "row",
		alignItems: "center",
	},
	logoutButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 16,
		height: 18,
	},
	logoutButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	logoutButtonImage: {
		resizeMode: "contain",
	},
	textButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 57,
		height: 15,
	},
	textButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	textButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	privacyPolicyButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 88,
		height: 15,
		marginLeft: 1,
		marginBottom: 29,
	},
	privacyPolicyButtonText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	privacyPolicyButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	howToGuideButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 84,
		height: 15,
		marginLeft: 1,
	},
	howToGuideButtonText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	howToGuideButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
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
		marginTop: 56,
	},
	menuButtonButtonText: {
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
	pocketButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 20,
		height: 24,
		marginRight: 30,
		marginTop: 53,
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
})
