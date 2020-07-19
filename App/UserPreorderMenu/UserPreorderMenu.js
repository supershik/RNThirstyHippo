//
//  UserPreorderMenu
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class UserPreorderMenu extends React.Component {

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

	onCartButtonPressed = () => {
	
	}

	onOvalPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onOvalTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserMenu")
	}

	onPlusCirclePressed = () => {
	
	}

	onMinusCirclePressed = () => {
	
	}

	onPlusCircleTwoPressed = () => {
	
	}

	onMinusCircleTwoPressed = () => {
	
	}

	onPlusCircleThreePressed = () => {
	
	}

	onMinusCircleThreePressed = () => {
	
	}

	onPlusCircleFourPressed = () => {
	
	}

	onMinusCircleFourPressed = () => {
	
	}

	onPlusCircleFivePressed = () => {
	
	}

	onMinusCircleFivePressed = () => {
	
	}

	onPlusCircleSixPressed = () => {
	
	}

	onMinusCircleSixPressed = () => {
	
	}

	onPlusCircleSevenPressed = () => {
	
	}

	onMinusCircleSevenPressed = () => {
	
	}

	onPlusCircleEightPressed = () => {
	
	}

	onMinusCircleEightPressed = () => {
	
	}

	onPlusCircleNinePressed = () => {
	
	}

	onMinusCircleNinePressed = () => {
	
	}

	onPlusCircleTenPressed = () => {
	
	}

	onMinusCircleTenPressed = () => {
	
	}

	onConfirmPreorderButPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("UserAddYourCard")
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
							right: 56,
							top: 46,
							height: 88,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 88,
								marginRight: 19,
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 40,
									marginLeft: 5,
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
												source={require("./../../assets/images/oval-4.png")}
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
							</View>
							<Text
								style={styles.pageTitlePreordeText}>Preorder Menu</Text>
						</View>
						<TouchableOpacity
							onPress={this.onCartButtonPressed}
							style={styles.cartButtonButton}>
							<Image
								source={require("./../../assets/images/pocket-2.png")}
								style={styles.cartButtonButtonImage}/>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView
					style={styles.allDrinkCardsScrollView}>
					<View
						style={styles.drinkCard1View}>
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
								source={require("./../../assets/images/background-2.png")}
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
								style={styles.drinkCardElementsView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
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
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceView}>
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
												<Text
													style={styles.amountText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textText}>$</Text>
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
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1TwoView}>
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
								source={require("./../../assets/images/background-2.png")}
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
								style={styles.drinkCardElementsTwoView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
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
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameTwoText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameTwoText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceTwoView}>
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
												<Text
													style={styles.amountTwoText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textThreeText}>$</Text>
											</View>
										</View>
									</View>
								</View>
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
											style={styles.textFourText}>0</Text>
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
						style={styles.drinkCard1ThreeView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundThreeImage}/>
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
								style={styles.drinkCardElementsThreeView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
										alignItems: "flex-start",
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
											alignSelf: "stretch",
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameThreeText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameThreeText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceThreeView}>
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
												<Text
													style={styles.amountThreeText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textFiveText}>$</Text>
											</View>
										</View>
									</View>
								</View>
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
											style={styles.textSixText}>0</Text>
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
					</View>
					<View
						style={styles.drinkCard1FourView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundFourImage}/>
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
								style={styles.drinkCardElementsFourView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
									}}>
									<View
										style={styles.imageFourView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameFourText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameFourText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceFourView}>
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
												<Text
													style={styles.amountFourText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textSevenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsFourView}>
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
											style={styles.textEightText}>0</Text>
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
												onPress={this.onMinusCircleFourPressed}
												style={styles.minusCircleFourButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleFourButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleFourPressed}
												style={styles.plusCircleFourButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleFourButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1FiveView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundFiveImage}/>
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
								style={styles.drinkCardElementsFiveView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.imageFiveView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameFiveText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameFiveText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceFiveView}>
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
												<Text
													style={styles.amountFiveText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textNineText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsFiveView}>
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
											style={styles.textTenText}>0</Text>
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
												onPress={this.onMinusCircleFivePressed}
												style={styles.minusCircleFiveButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleFiveButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleFivePressed}
												style={styles.plusCircleFiveButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleFiveButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1SixView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundSixImage}/>
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
								style={styles.drinkCardElementsSixView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
									}}>
									<View
										style={styles.imageSixView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameSixText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameSixText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceSixView}>
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
												<Text
													style={styles.amountSixText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textElevenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsSixView}>
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
											style={styles.textTwelveText}>0</Text>
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
												onPress={this.onMinusCircleSixPressed}
												style={styles.minusCircleSixButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleSixButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleSixPressed}
												style={styles.plusCircleSixButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleSixButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1SevenView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundSevenImage}/>
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
								style={styles.drinkCardElementsSevenView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
									}}>
									<View
										style={styles.imageSevenView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameSevenText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameSevenText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceSevenView}>
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
												<Text
													style={styles.amountSevenText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textThirteenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsSevenView}>
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
											style={styles.textFourteenText}>0</Text>
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
												onPress={this.onMinusCircleSevenPressed}
												style={styles.minusCircleSevenButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleSevenButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleSevenPressed}
												style={styles.plusCircleSevenButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleSevenButtonImage}/>
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
						style={styles.drinkCard1EightView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundEightImage}/>
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
								style={styles.drinkCardElementsEightView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.imageEightView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameEightText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameEightText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceEightView}>
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
												<Text
													style={styles.amountEightText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textFifteenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsEightView}>
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
											style={styles.textSixteenText}>0</Text>
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
												onPress={this.onMinusCircleEightPressed}
												style={styles.minusCircleEightButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleEightButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleEightPressed}
												style={styles.plusCircleEightButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleEightButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1NineView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundNineImage}/>
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
								style={styles.drinkCardElementsNineView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.imageNineView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameNineText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameNineText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceNineView}>
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
												<Text
													style={styles.amountNineText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textSeventeenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsNineView}>
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
											style={styles.textEighteenText}>0</Text>
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
												onPress={this.onMinusCircleNinePressed}
												style={styles.minusCircleNineButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleNineButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleNinePressed}
												style={styles.plusCircleNineButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleNineButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.drinkCard1TenView}>
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
								source={require("./../../assets/images/background-2.png")}
								style={styles.backgroundTenImage}/>
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
								style={styles.drinkCardElementsTenView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 6,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.imageTenView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											width: 191,
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.drinkNameTenText}>Drink Name</Text>
										<Text
											style={styles.inputDrinkNameTenText}>Drink Description</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.drinkPriceTenView}>
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
												<Text
													style={styles.amountTenText}>0.00</Text>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Text
													style={styles.textNineteenText}>$</Text>
											</View>
										</View>
									</View>
								</View>
								<View
									style={styles.addSubtractButtonsTenView}>
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
											style={styles.textTwentyText}>0</Text>
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
												onPress={this.onMinusCircleTenPressed}
												style={styles.minusCircleTenButton}>
												<Image
													source={require("./../../assets/images/minus-circle.png")}
													style={styles.minusCircleTenButtonImage}/>
											</TouchableOpacity>
											<View
												style={{
													flex: 1,
												}}/>
											<TouchableOpacity
												onPress={this.onPlusCircleTenPressed}
												style={styles.plusCircleTenButton}>
												<Image
													source={require("./../../assets/images/plus-circle.png")}
													style={styles.plusCircleTenButtonImage}/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
				<View
					pointerEvents="box-none"
					style={{
						height: 150,
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
							bottom: 18,
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
									style={styles.amountThirteenText}>$ 0.50</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
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
										style={styles.amountElevenText}>$0.50</Text>
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
										style={styles.amountTwelveText}>$ 0.00</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity
							onPress={this.onConfirmPreorderButPressed}
							style={styles.confirmPreorderButButton}>
							<Text
								style={styles.confirmPreorderButButtonText}>Create Preorder!</Text>
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
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
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
	ovalButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
	},
	pageTitlePreordeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 256,
		marginTop: 16,
	},
	cartButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22,
		height: 26,
		marginTop: 7,
	},
	cartButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	cartButtonButtonImage: {
		resizeMode: "contain",
	},
	allDrinkCardsScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 18,
		marginBottom: 9,
	},
	drinkCard1View: {
		backgroundColor: "transparent",
		borderRadius: 14,
		height: 129,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
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
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
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
	drinkCard1TwoView: {
		backgroundColor: "transparent",
		borderRadius: 14,
		height: 129,
		marginTop: 4,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
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
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceTwoView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountTwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textThreeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textFourText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
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
	plusCircleTwoButtonImage: {
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
	drinkCard1ThreeView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 129,
	},
	drinkCardElementsThreeView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
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
		width: 191,
	},
	inputDrinkNameThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceThreeView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountThreeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textFiveText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textSixText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	minusCircleThreeButtonImage: {
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
	plusCircleThreeButtonImage: {
		resizeMode: "contain",
	},
	plusCircleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	drinkCard1FourView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundFourImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsFourView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
	},
	drinkNameFourText: {
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
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceFourView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountFourText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textEightText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleFourButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleFourButtonImage: {
		resizeMode: "contain",
	},
	minusCircleFourButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleFourButtonImage: {
		resizeMode: "contain",
	},
	plusCircleFourButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleFourButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	drinkCard1FiveView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundFiveImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsFiveView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameFiveText: {
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
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceFiveView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountFiveText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textNineText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleFiveButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleFiveButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleFiveButtonImage: {
		resizeMode: "contain",
	},
	plusCircleFiveButtonImage: {
		resizeMode: "contain",
	},
	plusCircleFiveButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleFiveButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	drinkCard1SixView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundSixImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsSixView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
	},
	drinkNameSixText: {
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
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceSixView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountSixText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textElevenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsSixView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwelveText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleSixButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleSixButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleSixButtonImage: {
		resizeMode: "contain",
	},
	plusCircleSixButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleSixButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleSixButtonImage: {
		resizeMode: "contain",
	},
	drinkCard1SevenView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundSevenImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsSevenView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageSevenView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
	},
	drinkNameSevenText: {
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
	inputDrinkNameSevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceSevenView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountSevenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textThirteenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsSevenView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleSevenButtonImage: {
		resizeMode: "contain",
	},
	minusCircleSevenButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleSevenButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleSevenButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleSevenButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleSevenButtonImage: {
		resizeMode: "contain",
	},
	drinkCard1EightView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginBottom: 4,
	},
	backgroundEightImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsEightView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageEightView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameEightText: {
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
	inputDrinkNameEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceEightView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountEightText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textFifteenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsEightView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textSixteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleEightButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleEightButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleEightButtonImage: {
		resizeMode: "contain",
	},
	plusCircleEightButtonImage: {
		resizeMode: "contain",
	},
	plusCircleEightButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleEightButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	drinkCard1NineView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginBottom: 4,
	},
	backgroundNineImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsNineView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageNineView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameNineText: {
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
	inputDrinkNameNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceNineView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountNineText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textSeventeenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsNineView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textEighteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleNineButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleNineButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minusCircleNineButtonImage: {
		resizeMode: "contain",
	},
	plusCircleNineButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleNineButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleNineButtonImage: {
		resizeMode: "contain",
	},
	drinkCard1TenView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
	},
	backgroundTenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 129,
	},
	drinkCardElementsTenView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageTenView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameTenText: {
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
	inputDrinkNameTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 4,
	},
	drinkPriceTenView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountTenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textNineteenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsTenView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwentyText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleTenButtonImage: {
		resizeMode: "contain",
	},
	minusCircleTenButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	minusCircleTenButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusCircleTenButtonImage: {
		resizeMode: "contain",
	},
	plusCircleTenButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 32,
		height: 32,
	},
	plusCircleTenButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	feeBoxView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 149,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	pickUpPreorderText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginBottom: 27,
	},
	tipAndTotalView: {
		backgroundColor: "transparent",
		width: 210,
		height: 77,
		marginRight: 3,
		marginBottom: 5,
		alignItems: "flex-end",
	},
	serviceFeeView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
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
	amountThirteenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
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
	amountElevenText: {
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
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	amountTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
	},
	confirmPreorderButButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	confirmPreorderButButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	confirmPreorderButButton: {
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
})
