//
//  UserYourPreorder1Item
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserYourPreorder1Item extends React.Component {

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

	onOvalTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onOvalPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
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

	onPlusCirclePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder2Items")
	}

	onMinusCirclePressed = () => {
	
	}

	onClearPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
	}

	onPlusCircleTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserYourPreorder2Items")
	}

	onMinusCircleTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserPreorderMenu")
	}

	onClearTipPressed = () => {
	
	}

	onLowTipPressed = () => {
	
	}

	onMediumTipPressed = () => {
	
	}

	onHighTipPressed = () => {
	
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
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.pageTitleYourPrText}>Your Preorder</Text>
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
				</View>
				<ScrollView
					style={styles.itemOrderedTipScrollView}>
					<View
						style={styles.orderDrink1AndSuView}>
						<View
							style={styles.order1ElementsView}>
							<View
								style={styles.orderElementsView}>
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
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageTwoView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												marginTop: 4,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameTwoText}>Drink Name</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.priceTwoText}>$ 0.00</Text>
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 2,
										width: 190,
										bottom: 0,
										height: 70,
										alignItems: "center",
									}}>
									<Text
										style={styles.inputDrinkNameTwoText}>Drink Description</Text>
									<View
										style={{
											flex: 1,
										}}/>
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
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.suggestedOrderCardView}>
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
									source={require("./../../assets/images/background.png")}
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
									style={styles.suggestedOrderElemView}>
									<View
										style={styles.imageView}/>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											marginLeft: 7,
											marginTop: 4,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameText}>Want a Drink Name?</Text>
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
												marginRight: 1,
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
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.tipView}>
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
								style={styles.backgroundTwoImage}/>
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
								style={styles.tipTwoView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 30,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.tipText}>Tip:</Text>
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
											style={styles.lowTipButtonText}>$ 1.00</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={this.onMediumTipPressed}
										style={styles.mediumTipButton}>
										<Text
											style={styles.mediumTipButtonText}>$ 2.00</Text>
									</TouchableOpacity>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={this.onHighTipPressed}
										style={styles.highTipButton}>
										<Text
											style={styles.highTipButtonText}>$ 3.00</Text>
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
						<Text
							style={styles.pickUpPreorderText}>Pick Up Preorder!</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							bottom: 20,
							height: 132,
							justifyContent: "flex-end",
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
									style={styles.tipThreeView}>
									<Text
										style={styles.tipTwoText}>Tip:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.amountTwoText}>$ 0.00</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity
							onPress={this.onPickUpPreorderButPressed}
							style={styles.pickUpPreorderButButton}>
							<Text
								style={styles.pickUpPreorderButButtonText}>Pay and Pick Up!</Text>
						</TouchableOpacity>
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
	topImageImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 148,
	},
	pageTitleYourPrText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 331,
		marginTop: 56,
	},
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
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
	ovalTwoButtonImage: {
		resizeMode: "contain",
	},
	backButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
		marginRight: 4,
		marginTop: 7,
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
	itemOrderedTipScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 319,
		marginTop: 18,
		marginBottom: 9,
	},
	orderDrink1AndSuView: {
		backgroundColor: "transparent",
		height: 307,
	},
	order1ElementsView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 166,
		justifyContent: "center",
		alignItems: "center",
	},
	orderElementsView: {
		backgroundColor: "transparent",
		width: 277,
		height: 127,
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
	},
	clearButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	clearButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	imageTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 78,
		height: 79,
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
		width: 191,
	},
	priceTwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		width: 91,
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
		width: 188,
	},
	addSubtractButtonsTwoView: {
		backgroundColor: "transparent",
		width: 103,
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
		width: 32,
	},
	minusCircleTwoButtonImage: {
		resizeMode: "contain",
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
	suggestedOrderCardView: {
		backgroundColor: "transparent",
		borderRadius: 14,
		height: 135,
		marginLeft: 1,
		marginRight: 1,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 135,
	},
	suggestedOrderElemView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 19,
		flexDirection: "row",
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 78,
		height: 78,
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
		width: 191,
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
		marginRight: 2,
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
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		width: 33,
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
	minusCircleButtonImage: {
		resizeMode: "contain",
	},
	minusCircleButtonText: {
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
	plusCircleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleButtonImage: {
		resizeMode: "contain",
	},
	priceText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		position: "absolute",
		right: 0,
		width: 91,
		bottom: 3,
	},
	tipView: {
		backgroundColor: "transparent",
		borderRadius: 14,
		height: 125,
		marginLeft: 1,
		marginRight: 1,
		marginBottom: 52,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 125,
	},
	tipTwoView: {
		backgroundColor: "transparent",
		height: 82,
		marginLeft: 16,
		marginRight: 13,
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
		width: 182,
		marginTop: 6,
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
	lowTipButtonText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	lowTipButtonImage: {
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
	mediumTipButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
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
	feeBoxView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 150,
		alignItems: "center",
	},
	pickUpPreorderText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 103,
	},
	tipAndTotalView: {
		backgroundColor: "transparent",
		width: 210,
		height: 77,
		marginRight: 3,
		marginBottom: 5,
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
		alignItems: "center",
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
		alignSelf: "flex-start",
		marginTop: 15,
	},
	amountText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.38,
	},
	tipThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 141,
		top: 0,
		height: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	tipTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
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
	pickUpPreorderButButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
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
		alignSelf: "stretch",
		height: 50,
	},
	pickUpPreorderButButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
