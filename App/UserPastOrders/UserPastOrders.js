//
//  UserPastOrders
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserPastOrders extends React.Component {

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
					style={styles.pageTitlePastOrText}>Past Orders</Text>
				<ScrollView
					style={styles.pastOrdersScrollView}>
					<View
						style={styles.pastOrder1ItemView}>
						<View
							style={styles.titleAndTimeOfEvView}>
							<Text
								style={styles.timeOfPurchaseText}>Time of Purchase</Text>
							<Text
								style={styles.nameOfEventText}>Event Name</Text>
						</View>
						<Text
							style={styles.orderOneNameText}>Drink 1 Name</Text>
						<Text
							style={styles.priceText}>$ 0.00</Text>
						<Text
							style={styles.tipAndServiceCharText}>Tip: $ 0.00 Service Fee: $0.50</Text>
						<View
							style={styles.seperatorView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 23,
								marginLeft: 21,
								marginRight: 20,
								marginBottom: 18,
							}}>
							<Text
								style={styles.totalAmountText}>$ 0.50</Text>
							<Text
								style={styles.totalTextText}>Total:</Text>
						</View>
					</View>
					<View
						style={styles.pastOrders2ItemsView}>
						<View
							style={styles.order2View}>
							<View
								style={styles.titleAndTimeOfEvTwoView}>
								<Text
									style={styles.timeOfPurchaseTwoText}>Time of Purchase</Text>
								<Text
									style={styles.nameOfEventTwoText}>Event Name</Text>
							</View>
							<Text
								style={styles.order1NameText}>Drink 1 Name</Text>
							<Text
								style={styles.order1PriceText}>$ 0.00</Text>
							<Text
								style={styles.order2NameText}>Drink 2 Name</Text>
							<Text
								style={styles.order2PriceText}>$ 0.00</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.tipAndServiceCharTwoText}>Tip: $ 0.00 Service Fee: $0.50</Text>
							<View
								style={styles.seperatorTwoView}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 23,
									marginLeft: 1,
								}}>
								<Text
									style={styles.totalAmountTwoText}>$ 0.50</Text>
								<Text
									style={styles.totalTextTwoText}>Total:</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.pastOrders3ItemsView}>
						<View
							style={styles.order3View}>
							<View
								style={styles.titleAndTimeOfEvThreeView}>
								<Text
									style={styles.timeOfPurchaseThreeText}>Time of Purchase</Text>
								<Text
									style={styles.nameOfEventThreeText}>Event Name</Text>
							</View>
							<Text
								style={styles.order1NameTwoText}>Drink 1 Name</Text>
							<Text
								style={styles.order1PriceTwoText}>$ 0.00</Text>
							<Text
								style={styles.order2NameTwoText}>Drink 2 Name</Text>
							<Text
								style={styles.order2PriceTwoText}>$ 0.00</Text>
							<Text
								style={styles.order3NameText}>Drink 3 Name</Text>
							<Text
								style={styles.order2PriceThreeText}>$ 0.00</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.tipAndServiceCharThreeText}>Tip: $ 0.00 Service Fee: $0.50</Text>
							<View
								style={styles.seperatorThreeView}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 23,
									marginLeft: 1,
								}}>
								<Text
									style={styles.totalAmountThreeText}>$  0.50</Text>
								<Text
									style={styles.totalTextThreeText}>Total:</Text>
							</View>
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
		alignItems: "center",
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
	pageTitlePastOrText: {
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
		marginTop: 23,
	},
	pastOrdersScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		width: 318,
		marginTop: 32,
		alignItems: "center",
	},
	pastOrder1ItemView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 318,
		height: 166,
	},
	titleAndTimeOfEvView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20,
	},
	timeOfPurchaseText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.85,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
	},
	nameOfEventText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
	},
	orderOneNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 276,
		marginRight: 20,
	},
	priceText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		alignSelf: "flex-end",
		width: 276,
		marginRight: 20,
		marginTop: 5,
	},
	tipAndServiceCharText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.77,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 2,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		alignSelf: "center",
		width: 274,
		height: 1,
		marginTop: 2,
	},
	totalAmountText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 1.54,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 138,
		bottom: 0,
	},
	totalTextText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.54,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 141,
		bottom: 0,
	},
	pastOrders2ItemsView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 318,
		height: 211,
		marginTop: 8,
		justifyContent: "center",
	},
	order2View: {
		backgroundColor: "transparent",
		height: 173,
		marginLeft: 20,
		marginRight: 20,
	},
	titleAndTimeOfEvTwoView: {
		backgroundColor: "transparent",
		height: 35,
	},
	timeOfPurchaseTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.85,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
	},
	nameOfEventTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.27,
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
	},
	order1NameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		marginLeft: 2,
	},
	order1PriceText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 5,
	},
	order2NameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 2,
	},
	order2PriceText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 5,
	},
	tipAndServiceCharTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.77,
		marginBottom: 2,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginLeft: 3,
		marginRight: 1,
		marginBottom: 10,
	},
	totalAmountTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 1.54,
		position: "absolute",
		right: 0,
		width: 138,
		bottom: 0,
	},
	totalTextTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.54,
		position: "absolute",
		left: 0,
		width: 141,
		bottom: 0,
	},
	pastOrders3ItemsView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 318,
		height: 256,
		marginTop: 8,
		justifyContent: "center",
	},
	order3View: {
		backgroundColor: "transparent",
		height: 218,
		marginLeft: 20,
		marginRight: 20,
	},
	titleAndTimeOfEvThreeView: {
		backgroundColor: "transparent",
		height: 35,
	},
	timeOfPurchaseThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.85,
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
	},
	nameOfEventThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
	},
	order1NameTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		marginLeft: 2,
	},
	order1PriceTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 5,
	},
	order2NameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		marginLeft: 2,
		marginTop: 2,
	},
	order2PriceTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 5,
	},
	order3NameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 2,
	},
	order2PriceThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.21,
		marginLeft: 2,
		marginTop: 5,
	},
	tipAndServiceCharThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.77,
		backgroundColor: "transparent",
		marginBottom: 2,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginLeft: 3,
		marginRight: 1,
		marginBottom: 10,
	},
	totalAmountThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 1.54,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 138,
		bottom: 0,
	},
	totalTextThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.54,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 141,
		bottom: 0,
	},
})
