//
//  AdminPreorderQue
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class AdminPreorderQue extends React.Component {

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
	
		const { navigate } = this.props.navigation
		
		navigate("AdminMenu")
	}

	onPocketPressed = () => {
	
	}

	onOvalTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminMenu")
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
						source={require("./../../assets/images/top-image-6.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 53,
							right: 50,
							top: 46,
							height: 88,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.pageTitlePreordeText}>Preorder Que</Text>
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
										source={require("./../../assets/images/oval-10.png")}
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
									onPress={this.onOvalPressed}
									style={styles.ovalButton}>
									<Image
										source={require("./../../assets/images/oval-9.png")}
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
					style={styles.preordeQueCardsScrollView}>
					<View
						style={styles.preorderQueCardView}>
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
								source={require("./../../assets/images/background-18.png")}
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
										alignItems: "flex-start",
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
											alignSelf: "stretch",
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
								<Text
									style={styles.textTwoText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardTwoView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textFourText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardThreeView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textSixText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardFourView}>
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
								source={require("./../../assets/images/background-18.png")}
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
										alignItems: "flex-start",
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
											alignSelf: "stretch",
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
								<Text
									style={styles.textEightText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardFiveView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textTenText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardTenView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textTwentyText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardNineView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textEighteenText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.preorderQueCardEightView}>
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
								source={require("./../../assets/images/background-18.png")}
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
								<Text
									style={styles.textSixteenText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardSevenView}>
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
								source={require("./../../assets/images/background-18.png")}
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
										alignItems: "flex-start",
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
											alignSelf: "stretch",
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
								<Text
									style={styles.textFourteenText}>0</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.preorderQueCardSixView}>
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
								source={require("./../../assets/images/background-18.png")}
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
										alignItems: "flex-start",
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
											alignSelf: "stretch",
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
								<Text
									style={styles.textTwelveText}>0</Text>
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
	pageTitlePreordeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 256,
		marginTop: 56,
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
	preordeQueCardsScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 317,
		marginTop: 18,
		marginBottom: 14,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
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
		width: 79,
		height: 79,
	},
	drinkNameText: {
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
	textTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		borderRadius: 15,
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
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundThreeImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
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
	textSixText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardFourView: {
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
		width: 79,
		height: 79,
	},
	drinkNameFourText: {
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
	textEightText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardFiveView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
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
	textTenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardTenView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundTenImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
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
	textTwentyText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardNineView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginTop: 4,
	},
	backgroundNineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
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
	textEighteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardEightView: {
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
	textSixteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardSevenView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
		marginBottom: 4,
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
	textFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
	preorderQueCardSixView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		height: 129,
	},
	backgroundSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
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
		width: 79,
		height: 79,
	},
	drinkNameSixText: {
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
	inputDrinkNameSixText: {
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
	drinkPriceSixView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountSixText: {
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
	textElevenText: {
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
	textTwelveText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		bottom: 0,
	},
})
