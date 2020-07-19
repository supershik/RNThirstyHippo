//
//  UserYourPreorder3Items
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserYourPreorder3Items extends React.Component {

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

	onOvalPressed = () => {
	
		this.props.navigation.goBack()
	}

	onOvalTwoPressed = () => {
	
		this.props.navigation.goBack()
	}

	onPocketPressed = () => {
	
	}

	onPickUpPreorderButPressed = () => {
	
		Alert.alert("Go to Thirsty Hippo Station", "Payment and Pick Up Didn't Occur! ", [{
			text: "Cancel",
			style: "cancel",
			onPress: () => {
			
			},
		}, {
			text: "Try Again!",
			onPress: () => {
			
			},
		}])
	}

	onClearTipPressed = () => {
	
	}

	onLowTipPressed = () => {
	
	}

	onMediumTipPressed = () => {
	
	}

	onHighTipPressed = () => {
	
	}

	onPlusCirclePressed = () => {
	
	}

	onMinusCirclePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder2Items")
	}

	onPlusCircleTwoPressed = () => {
	
	}

	onMinusCircleTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder2Items")
	}

	onClearPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
	}

	onPlusCircleThreePressed = () => {
	
	}

	onMinusCircleThreePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder2Items")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 148,
					}}>
					<Image
						source={require("./../../assets/images/top-image.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 48,
							right: 52,
							top: 46,
							height: 88,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 40,
								marginLeft: 5,
								marginRight: 4,
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
										onPress={this.onOvalPressed}
										style={styles.ovalButton}>
										<Image
											source={require("./../../assets/images/oval.png")}
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
										source={require("./../../assets/images/back-button.png")}
										style={styles.backButtonImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
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
										onPress={this.onOvalTwoPressed}
										style={styles.ovalTwoButton}>
										<Image
											source={require("./../../assets/images/oval-2.png")}
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
										source={require("./../../assets/images/menu-button.png")}
										style={styles.menuButtonImage}/>
								</View>
							</View>
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
							style={styles.pageTitleText}>Your Preorder</Text>
					</View>
				</View>
				<ScrollView
					style={styles.itemOrderedTipScrollView}>
					<View
						style={styles.order3ElementsView}>
						<View
							style={styles.drink1ElementsView}>
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
									onPress={this.onClearPressed}
									style={styles.clearButton}>
									<Text
										style={styles.clearButtonText}>Clear</Text>
								</TouchableOpacity>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										flexDirection: "row",
									}}>
									<View
										style={styles.imageThreeView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 185,
											marginTop: 4,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameThreeText}>Drink Name</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.priceThreeText}>$ 0.00</Text>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 6,
									width: 182,
									bottom: 0,
									height: 69,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameThreeText}>Drink Description</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.addSubtractButtonsThreeView}>
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
											style={styles.textThreeText}>0</Text>
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
							style={styles.drink2ElementsView}>
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
									style={styles.imageTwoView}/>
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
								<Image
									source={require("./../../assets/images/separator-line-1-2.png")}
									style={styles.separatorLine1TwoImage}/>
								<Text
									style={styles.drinkNameTwoText}>Drink Name</Text>
								<Text
									style={styles.inputDrinkNameTwoText}>Drink Description</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 33,
										marginLeft: 85,
										marginRight: 5,
									}}>
									<View
										style={styles.addSubtractButtonsTwoView}>
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
												style={styles.textTwoText}>0</Text>
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
													onPress={this.onMinusCircleTwoPressed}
													style={styles.minusCircleTwoButton}>
													<Image
														source={require("./../../assets/images/minus-circle.png")}
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
														source={require("./../../assets/images/plus-circle.png")}
														style={styles.plusCircleTwoButtonImage}/>
												</TouchableOpacity>
											</View>
										</View>
									</View>
									<Text
										style={styles.priceTwoText}>$ 0.00</Text>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.drink3ElementsView}>
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
									style={styles.imageView}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/separator-line-1-2.png")}
									style={styles.separatorLine1Image}/>
								<Text
									style={styles.drinkNameText}>Drink Name</Text>
								<Text
									style={styles.inputDrinkNameText}>Drink Description</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 33,
										marginLeft: 85,
										marginRight: 5,
									}}>
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
													onPress={this.onMinusCirclePressed}
													style={styles.minusCircleButton}>
													<Image
														source={require("./../../assets/images/minus-circle.png")}
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
														source={require("./../../assets/images/plus-circle.png")}
														style={styles.plusCircleButtonImage}/>
												</TouchableOpacity>
											</View>
										</View>
									</View>
									<Text
										style={styles.priceText}>$ 0.00</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.tipTwoView}>
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
								source={require("./../../assets/images/background-6.png")}
								style={styles.backgroundImage}/>
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
								style={styles.tipThreeView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 30,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.tipTwoText}>Tip:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onClearTipPressed}
										style={styles.clearTipButton}>
										<Text
											style={styles.clearTipButtonText}>Clear</Text>
									</TouchableOpacity>
								</View>
								<Text
									style={styles.tipDescpitionText}>Don’t forget to tip your Bartender</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 31,
										marginLeft: 21,
										marginRight: 25,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<TouchableOpacity
										onPress={this.onLowTipPressed}
										style={styles.lowTipButton}>
										<Text
											style={styles.lowTipButtonText}> 15%</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={this.onMediumTipPressed}
										style={styles.mediumTipButton}>
										<Text
											style={styles.mediumTipButtonText}> 18%</Text>
									</TouchableOpacity>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onHighTipPressed}
										style={styles.highTipButton}>
										<Text
											style={styles.highTipButtonText}> 20%</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
				<View
					pointerEvents="box-none"
					style={{
						height: 152,
					}}>
					<View
						style={styles.feeBoxView}>
						<View
							style={styles.totalRectangleView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 23,
								width: 214,
								top: 0,
								height: 120,
								alignItems: "flex-end",
							}}>
							<View
								style={styles.tipAndTotalView}>
								<View
									style={styles.serviceFeeView}>
									<Text
										style={styles.serviceFeeText}>Service Fee:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.amountThreeText}>$ 0.50</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "flex-end",
										width: 157,
										marginTop: 4,
									}}>
									<View
										style={styles.totalView}>
										<Text
											style={styles.totalText}>Total:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.amountText}>$0.50</Text>
									</View>
									<View
										style={styles.tipView}>
										<Text
											style={styles.tipText}>Tip:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.amountTwoText}>$ 0.00</Text>
									</View>
								</View>
							</View>
							<Text
								style={styles.pickUpPreorderText}>Pick Up Preorder!</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={this.onPickUpPreorderButPressed}
						style={styles.pickUpPreorderButButton}>
						<Text
							style={styles.pickUpPreorderButButtonText}>Pay and Pick up!</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	topImageImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 148,
	},
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
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
	ovalButton: {
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
	ovalButtonImage: {
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
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
		marginRight: 19,
	},
	ovalTwoButton: {
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
	ovalTwoButtonImage: {
		resizeMode: "contain",
	},
	ovalTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	menuButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
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
		width: 331,
		marginTop: 16,
	},
	itemOrderedTipScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 319,
		marginTop: 18,
		marginBottom: 8,
	},
	order3ElementsView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 423,
		alignItems: "flex-start",
	},
	drink1ElementsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 269,
		height: 126,
		marginTop: 21,
	},
	clearButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 77,
		height: 30,
		marginRight: 1,
	},
	clearButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	clearButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	imageThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 78,
		height: 78,
	},
	drinkNameThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 185,
	},
	priceThreeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 88,
		marginRight: 1,
	},
	inputDrinkNameThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 179,
	},
	addSubtractButtonsThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 103,
		height: 33,
	},
	textThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		backgroundColor: "transparent",
		width: 32,
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
	drink2ElementsView: {
		backgroundColor: "transparent",
		width: 278,
		height: 118,
		marginLeft: 20,
		marginTop: 9,
	},
	imageTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 78,
		marginLeft: 4,
	},
	separatorLine1TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	drinkNameTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 185,
		marginRight: 5,
		marginTop: 24,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 189,
		marginRight: 1,
		marginTop: 5,
	},
	addSubtractButtonsTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 103,
		bottom: 0,
		height: 33,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		width: 34,
	},
	minusCircleTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleTwoButtonImage: {
		resizeMode: "contain",
	},
	plusCircleTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
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
	priceTwoText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 89,
		bottom: 3,
	},
	drink3ElementsView: {
		backgroundColor: "transparent",
		width: 278,
		height: 118,
		marginLeft: 20,
		marginBottom: 19,
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 78,
		marginLeft: 4,
	},
	separatorLine1Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 2,
	},
	drinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 185,
		marginRight: 5,
		marginTop: 24,
	},
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 189,
		marginRight: 1,
		marginTop: 5,
	},
	addSubtractButtonsView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 103,
		bottom: 0,
		height: 33,
	},
	textText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		backgroundColor: "transparent",
		width: 35,
	},
	minusCircleButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleButtonImage: {
		resizeMode: "contain",
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
		width: 32,
		height: 32,
	},
	plusCircleButtonImage: {
		resizeMode: "contain",
	},
	priceText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 89,
		bottom: 3,
	},
	tipTwoView: {
		backgroundColor: "transparent",
		borderRadius: 14,
		height: 125,
		marginRight: 2,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 125,
	},
	tipThreeView: {
		backgroundColor: "transparent",
		height: 82,
		marginLeft: 16,
		marginRight: 13,
	},
	tipTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 182,
		marginTop: 6,
	},
	clearTipButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	clearTipButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	clearTipButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(92, 90, 90)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 77,
		height: 30,
	},
	tipDescpitionText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 1,
	},
	lowTipButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(92, 90, 90)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 77,
		height: 31,
	},
	lowTipButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	lowTipButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	mediumTipButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	mediumTipButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(92, 90, 90)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 77,
		height: 31,
		marginLeft: 5,
	},
	mediumTipButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	highTipButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(92, 90, 90)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 77,
		height: 31,
	},
	highTipButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	highTipButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	feeBoxView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 152,
	},
	totalRectangleView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 26,
		height: 126,
	},
	tipAndTotalView: {
		backgroundColor: "transparent",
		width: 210,
		height: 77,
	},
	serviceFeeView: {
		backgroundColor: "transparent",
		height: 21,
		marginRight: 3,
		flexDirection: "row",
		alignItems: "center",
	},
	serviceFeeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	amountThreeText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
	},
	totalView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 157,
		bottom: 0,
		height: 34,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	totalText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 15,
	},
	amountText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.38,
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	tipView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 141,
		top: 0,
		height: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	tipText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	amountTwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
	},
	pickUpPreorderText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
		marginTop: 28,
	},
	pickUpPreorderButButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	pickUpPreorderButButton: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 20,
		right: 20,
		bottom: 20,
		height: 50,
	},
	pickUpPreorderButButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
})
