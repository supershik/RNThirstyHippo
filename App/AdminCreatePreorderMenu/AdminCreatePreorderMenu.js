//
//  AdminCreatePreorderMenu
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { ActionSheetIOS, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class AdminCreatePreorderMenu extends React.Component {

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

	onPlusCirclePressed = () => {
	
	}

	onMinusCirclePressed = () => {
	
	}

	onPlusCircleTwoPressed = () => {
	
		ActionSheetIOS.showActionSheetWithOptions({
			title: "Upload Top Image",
			message: "Upload From Camera Roll",
			options: ["Camera Roll"],
		}, (buttonIndex) => {
		
		})
	}

	onMinusCircleTwoPressed = () => {
	
	}

	onPocketPressed = () => {
	
	}

	onOvalPressed = () => {
	
		this.props.navigation.goBack()
	}

	onOvalTwoPressed = () => {
	
		this.props.navigation.goBack()
	}

	onSavePreorderMenuBPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminPreorderQue")
	}

	onEditPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminCreateEvent")
	}

	onSuggestPressed = () => {
	
	}

	onPlusCircleThreePressed = () => {
	
		ActionSheetIOS.showActionSheetWithOptions({
			title: "Upload Drink Image",
			message: "Upload from Camera Roll",
			options: ["Camera Roll"],
		}, (buttonIndex) => {
		
		})
	}

	onMinusCircleThreePressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 177,
					}}>
					<Image
						source={require("./../../assets/images/image.png")}
						style={styles.imageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 25,
							right: 27,
							top: 46,
							height: 123,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.backButtonWithShaView}>
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
									onPress={this.onOvalTwoPressed}
									style={styles.ovalTwoButton}>
									<Image
										source={require("./../../assets/images/oval.png")}
										style={styles.ovalTwoButtonImage}/>
								</TouchableOpacity>
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
								<Image
									source={require("./../../assets/images/back-button.png")}
									style={styles.backButtonImage}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.addTopImageButtonView}>
							<TouchableOpacity
								onPress={this.onMinusCircleTwoPressed}
								style={styles.minusCircleTwoButton}>
								<Image
									source={require("./../../assets/images/minus-circle-2.png")}
									style={styles.minusCircleTwoButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onPlusCircleTwoPressed}
								style={styles.plusCircleTwoButton}>
								<Image
									source={require("./../../assets/images/plus-circle-2.png")}
									style={styles.plusCircleTwoButtonImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={styles.menuButtonView}>
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
									onPress={this.onOvalPressed}
									style={styles.ovalButton}>
									<Image
										source={require("./../../assets/images/oval-2.png")}
										style={styles.ovalButtonImage}/>
								</TouchableOpacity>
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
								<Image
									source={require("./../../assets/images/menu-button.png")}
									style={styles.menuButtonImage}/>
							</View>
						</View>
						<TouchableOpacity
							onPress={this.onPocketPressed}
							style={styles.pocketButton}>
							<Image
								source={require("./../../assets/images/pocket.png")}
								style={styles.pocketButtonImage}/>
						</TouchableOpacity>
					</View>
					<Text
						style={styles.pageTitleCreateText}>Create Preorder Menu</Text>
				</View>
				<View
					style={styles.drinkCardView}>
					<View
						style={styles.drinkCardTwoView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 3,
							}}>
							<TouchableOpacity
								onPress={this.onSuggestPressed}
								style={styles.suggestButton}>
								<Text
									style={styles.suggestButtonText}>Suggest</Text>
							</TouchableOpacity>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "row",
								}}>
								<View
									style={styles.imageView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 191,
										marginTop: 4,
										alignItems: "flex-end",
									}}>
									<TextInput
										autoCorrect={false}
										placeholder="Drink Name"
										style={styles.drinkNameTextInput}/>
									<View
										style={{
											flex: 1,
										}}/>
									<TextInput
										autoCorrect={false}
										placeholder="Drink Description"
										style={styles.inputDrinkNameTextInput}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 82,
											height: 29,
										}}>
										<TextInput
											autoCorrect={false}
											placeholder="0.00"
											style={styles.priceTextInput}/>
										<Text
											style={styles.textTwoText}>$</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.addSubtractButtonsView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.textText}>0</Text>
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
									pointerEvents="box-none"
									style={{
										height: 32,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<TouchableOpacity
										onPress={this.onMinusCircleThreePressed}
										style={styles.minusCircleThreeButton}>
										<Image
											source={require("./../../assets/images/minus-circle.png")}
											style={styles.minusCircleThreeButtonImage}/>
									</TouchableOpacity>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onPlusCircleThreePressed}
										style={styles.plusCircleThreeButton}>
										<Image
											source={require("./../../assets/images/plus-circle.png")}
											style={styles.plusCircleThreeButtonImage}/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.addDrinkCardButtoView}>
					<TouchableOpacity
						onPress={this.onMinusCirclePressed}
						style={styles.minusCircleButton}>
						<Image
							source={require("./../../assets/images/minus-circle-2.png")}
							style={styles.minusCircleButtonImage}/>
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onPlusCirclePressed}
						style={styles.plusCircleButton}>
						<Image
							source={require("./../../assets/images/plus-circle-2.png")}
							style={styles.plusCircleButtonImage}/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onEditPressed}
					style={styles.editButton}>
					<Text
						style={styles.editButtonText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onSavePreorderMenuBPressed}
					style={styles.savePreorderMenuBButton}>
					<Text
						style={styles.savePreorderMenuBButtonText}>Save Preorder Menu!</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 177,
	},
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalTwoButton: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 40,
	},
	ovalTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	ovalTwoButtonImage: {
		resizeMode: "contain",
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 14,
		marginLeft: 16,
		marginRight: 16,
	},
	addTopImageButtonView: {
		backgroundColor: "transparent",
		width: 90,
		height: 38,
		marginTop: 85,
		flexDirection: "row",
		alignItems: "center",
	},
	minusCircleTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 38,
		height: 38,
	},
	minusCircleTwoButtonImage: {
		resizeMode: "contain",
	},
	minusCircleTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 38,
		height: 38,
	},
	plusCircleTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleTwoButtonImage: {
		resizeMode: "contain",
	},
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
		marginRight: 19,
	},
	ovalButton: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 40,
	},
	ovalButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	ovalButtonImage: {
		resizeMode: "contain",
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
	},
	pocketButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 20,
		height: 24,
		marginRight: 3,
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
	pocketButtonImage: {
		resizeMode: "contain",
	},
	pageTitleCreateText: {
		backgroundColor: "transparent",
		color: "rgb(247, 247, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		position: "absolute",
		left: 20,
		width: 306,
		top: 102,
	},
	drinkCardView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 319,
		height: 166,
		marginTop: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	drinkCardTwoView: {
		backgroundColor: "transparent",
		width: 277,
		height: 127,
	},
	suggestButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	suggestButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(184, 196, 187)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 77,
		height: 30,
	},
	suggestButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
	},
	drinkNameTextInput: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 191,
		height: 19,
	},
	inputDrinkNameTextInput: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 188,
		height: 32,
		marginRight: 3,
		marginBottom: 6,
	},
	priceTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		position: "absolute",
		right: 0,
		width: 82,
		bottom: 0,
		height: 29,
	},
	textTwoText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 17,
		top: 0,
	},
	addSubtractButtonsView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 33,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		width: 30,
	},
	minusCircleThreeButtonImage: {
		resizeMode: "contain",
	},
	minusCircleThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleThreeButtonImage: {
		resizeMode: "contain",
	},
	plusCircleThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addDrinkCardButtoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 97,
		height: 38,
		marginRight: 26,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	minusCircleButtonImage: {
		resizeMode: "contain",
	},
	minusCircleButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 38,
		height: 38,
	},
	minusCircleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 38,
		height: 38,
	},
	plusCircleButtonImage: {
		resizeMode: "contain",
	},
	editButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	editButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 30,
		height: 18,
		marginRight: 25,
		marginBottom: 15,
	},
	editButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	savePreorderMenuBButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	savePreorderMenuBButton: {
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
		marginBottom: 13,
	},
	savePreorderMenuBButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
