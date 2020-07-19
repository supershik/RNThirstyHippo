//
//  AdminEvents
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class AdminEvents extends React.Component {

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

	onSSSEventRevenuePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminEventRevenueAnalysis")
	}

	onEditPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminCreatePreorderMenu")
	}

	onEventLogoThreePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminPreorderQue")
	}

	onSSSEventRevenueTwoPressed = () => {
	
	}

	onEditTwoPressed = () => {
	
	}

	onEventLogoTwoPressed = () => {
	
	}

	onSSSEventRevenueThreePressed = () => {
	
	}

	onEditThreePressed = () => {
	
	}

	onEventLogoPressed = () => {
	
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
					style={styles.pageTitleLiveEvText}>Events</Text>
				<ScrollView
					style={styles.eventsScrollView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 171,
						}}>
						<View
							style={styles.eventsView}>
							<View
								style={styles.eventView}>
								<TouchableOpacity
									onPress={this.onEventLogoThreePressed}
									style={styles.eventLogoButton}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										width: 173,
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
									<Text
										style={styles.preorderQueText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<TouchableOpacity
											onPress={this.onEditPressed}
											style={styles.editButton}>
											<Text
												style={styles.editButtonText}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={this.onSSSEventRevenuePressed}
											style={styles.sssEventRevenueButton}>
											<Text
												style={styles.sssEventRevenueButtonText}>$$$</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.eventsThreeView}>
							<View
								style={styles.eventThreeView}>
								<TouchableOpacity
									onPress={this.onEventLogoPressed}
									style={styles.eventLogoThreeButton}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										width: 173,
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
									<Text
										style={styles.preorderQueThreeText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={styles.editView}>
											<TouchableOpacity
												onPress={this.onEditThreePressed}
												style={styles.editThreeButton}>
												<Text
													style={styles.editThreeButtonText}>Edit</Text>
											</TouchableOpacity>
										</View>
										<TouchableOpacity
											onPress={this.onSSSEventRevenueThreePressed}
											style={styles.sssEventRevenueThreeButton}>
											<Text
												style={styles.sssEventRevenueThreeButtonText}>$$$</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
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
							justifyContent: "center",
						}}>
						<View
							style={styles.eventsTwoView}>
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
										width: 173,
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
									<Text
										style={styles.preorderQueTwoText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<TouchableOpacity
											onPress={this.onEditTwoPressed}
											style={styles.editTwoButton}>
											<Text
												style={styles.editTwoButtonText}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={this.onSSSEventRevenueTwoPressed}
											style={styles.sssEventRevenueTwoButton}>
											<Text
												style={styles.sssEventRevenueTwoButtonText}>$$$</Text>
										</TouchableOpacity>
									</View>
								</View>
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
	pageTitleLiveEvText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 311,
		marginLeft: 20,
		marginTop: 23,
	},
	eventsScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		width: 317,
		marginTop: 32,
		marginBottom: 50,
	},
	eventsView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoButtonImage: {
		resizeMode: "contain",
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
	},
	eventLogoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	preorderQueText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 5,
	},
	editButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 18,
		marginRight: 28,
	},
	editButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	editButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sssEventRevenueButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 18,
	},
	sssEventRevenueButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sssEventRevenueButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventsThreeView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventThreeView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoThreeButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 79,
	},
	eventLogoThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventLogoThreeButtonImage: {
		resizeMode: "contain",
	},
	nameOfEventThreeText: {
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
	cityStateOfEventThreeText: {
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 2,
	},
	preorderQueThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 5,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
		height: 18,
		marginRight: 28,
		justifyContent: "center",
	},
	editThreeButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	editThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 13,
		marginLeft: 4,
		marginRight: 7,
	},
	editThreeButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sssEventRevenueThreeButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 18,
	},
	sssEventRevenueThreeButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sssEventRevenueThreeButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	eventsTwoView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventTwoView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
	},
	eventLogoTwoButton: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 78,
		height: 79,
	},
	eventLogoTwoButtonImage: {
		resizeMode: "contain",
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
	cityStateOfEventTwoText: {
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
	dateOfEventTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 3,
	},
	seperatorTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 2,
	},
	preorderQueTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 5,
	},
	editTwoButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 18,
		marginRight: 28,
	},
	editTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	editTwoButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sssEventRevenueTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sssEventRevenueTwoButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sssEventRevenueTwoButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 18,
	},
})
