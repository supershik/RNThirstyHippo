//
//  UserMenu
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserMenu extends React.Component {

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

	onHowToGuidePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserHowToGuide")
	}

	onPrivacyPolicyPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPrivacyPolicy")
	}

	onContactPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserContact")
	}

	onMyOrdersPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPastOrders")
	}

	onPaymentMethodsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPaymentMethod")
	}

	onPreorderMenuPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
	}

	onProfileAndSettingsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserProfileAndSettings")
	}

	onSearchPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserSearch")
	}

	onLogoutPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserWelcome")
	}

	onPocketPressed = () => {
	
	}

	onMenuButtonPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						width: 224,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 6,
							width: 217,
							top: 47,
							height: 434,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.searchBoxView}>
							<Image
								source={require("./../../assets/images/search-icon.png")}
								style={styles.searchIconImage}/>
						</View>
						<Text
							style={styles.pageTitleText}>Search</Text>
						<View
							style={styles.sliderTextView}>
							<Text
								style={styles.eventNameText}>Music Midtown</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.eventLocationCityText}>Atlanta, Georgia</Text>
						</View>
					</View>
					<View
						style={styles.menuListView}>
						<View
							style={styles.menuListTwoView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.myOrdersView}>
									<Image
										source={require("./../../assets/images/clipboard.png")}
										style={styles.clipboardImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onMyOrdersPressed}
										style={styles.myOrdersButton}>
										<Text
											style={styles.myOrdersButtonText}>PAST ORDERS</Text>
									</TouchableOpacity>
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
									alignItems: "flex-start",
								}}>
								<View
									style={styles.searchView}>
									<Image
										source={require("./../../assets/images/search-2.png")}
										style={styles.searchImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onSearchPressed}
										style={styles.searchButton}>
										<Text
											style={styles.searchButtonText}>SEARCH</Text>
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
									style={styles.preorderMenuView}>
									<Image
										source={require("./../../assets/images/map-pin-2.png")}
										style={styles.mapPinImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onPreorderMenuPressed}
										style={styles.preorderMenuButton}>
										<Text
											style={styles.preorderMenuButtonText}>PREORDER MENU</Text>
									</TouchableOpacity>
								</View>
								<View
									style={styles.paymentMethodsView}>
									<Image
										source={require("./../../assets/images/credit-card.png")}
										style={styles.creditCardImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onPaymentMethodsPressed}
										style={styles.paymentMethodsButton}>
										<Text
											style={styles.paymentMethodsButtonText}>PAYMENT METHOD</Text>
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
									<Image
										source={require("./../../assets/images/logout.png")}
										style={styles.logOutCopyImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onLogoutPressed}
										style={styles.logoutButton}>
										<Text
											style={styles.logoutButtonText}>LOGOUT</Text>
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
									onPress={this.onHowToGuidePressed}
									style={styles.howToGuideButton}>
									<Text
										style={styles.howToGuideButtonText}>How to Guide</Text>
								</TouchableOpacity>
							</View>
						</View>
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
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	searchBoxView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(107, 127, 153, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 202,
		height: 40,
		marginLeft: 15,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	searchIconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 17,
		marginLeft: 14,
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
		width: 153,
		marginLeft: 15,
		marginTop: 16,
	},
	sliderTextView: {
		backgroundColor: "transparent",
		width: 168,
		height: 46,
		marginTop: 300,
		alignItems: "flex-start",
	},
	eventNameText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		alignSelf: "stretch",
	},
	eventLocationCityText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		width: 109,
	},
	menuListView: {
		backgroundColor: "rgba(0, 112, 247, 0.9)",
		borderWidth: 1,
		borderColor: "rgba(107, 127, 153, 0.2)",
		borderStyle: "solid",
		shadowColor: "rgba(107, 127, 153, 0.5)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 224,
		top: 0,
		bottom: 0,
		alignItems: "flex-end",
	},
	menuListTwoView: {
		backgroundColor: "transparent",
		width: 193,
		height: 367,
		marginRight: 1,
		marginTop: 168,
	},
	myOrdersView: {
		backgroundColor: "transparent",
		width: 133,
		height: 20,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	clipboardImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 16,
		height: 20,
	},
	myOrdersButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	myOrdersButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	myOrdersButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 104,
		height: 15,
		marginRight: 5,
		marginTop: 5,
	},
	searchView: {
		backgroundColor: "transparent",
		width: 86,
		height: 18,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	searchImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 16,
	},
	searchButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 57,
		height: 15,
	},
	searchButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	searchButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	profileAndSettingsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 18,
		marginLeft: 3,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	profileAndSettingsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 17,
	},
	profileAndSettingsButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		marginRight: 5,
	},
	preorderMenuView: {
		backgroundColor: "transparent",
		width: 150,
		height: 20,
		marginLeft: 2,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	mapPinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 20,
	},
	preorderMenuButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 121,
		height: 15,
		marginRight: 2,
		marginTop: 5,
	},
	preorderMenuButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	preorderMenuButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	paymentMethodsView: {
		backgroundColor: "transparent",
		width: 166,
		height: 18,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	creditCardImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 15,
	},
	paymentMethodsButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 135,
		height: 15,
		marginRight: 7,
	},
	paymentMethodsButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	paymentMethodsButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	contactView: {
		backgroundColor: "transparent",
		width: 94,
		height: 19,
		marginLeft: 3,
		marginTop: 69,
		flexDirection: "row",
		alignItems: "center",
	},
	messageSquareImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 19,
		height: 19,
	},
	contactButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	contactButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	contactButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 66,
		height: 15,
	},
	logoutView: {
		backgroundColor: "transparent",
		width: 85,
		height: 18,
		marginLeft: 5,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	logOutCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 18,
	},
	logoutButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logoutButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 57,
		height: 15,
	},
	logoutButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	privacyPolicyButtonText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	privacyPolicyButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 88,
		height: 15,
		marginLeft: 3,
		marginBottom: 29,
	},
	privacyPolicyButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	howToGuideButtonImage: {
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
		marginLeft: 4,
	},
	howToGuideButtonText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		marginTop: 56,
	},
	menuButtonButtonImage: {
		resizeMode: "contain",
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
		marginRight: 28,
		marginTop: 53,
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
})
