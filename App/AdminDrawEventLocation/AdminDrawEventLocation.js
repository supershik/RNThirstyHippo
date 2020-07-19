//
//  AdminDrawEventLocation
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MapView } from "expo"


export default class AdminDrawEventLocation extends React.Component {

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

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onSaveLocationButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AdminCreateEvent")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<TouchableOpacity
					onPress={this.onBackButtonPressed}
					style={styles.backButtonButton}>
					<Image
						source={require("./../../assets/images/back-button.png")}
						style={styles.backButtonButtonImage}/>
				</TouchableOpacity>
				<Text
					style={styles.pageTitleDrawEvText}>Draw Event Location</Text>
				<View
					style={styles.formLineView}>
					<Text
						style={styles.eventNameText}>Event Name</Text>
					<Text
						style={styles.inputEventNameText}>Music Midtown</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.lineView}/>
				</View>
				<MapView
					showsUserLocation={true}
					showsTraffic={false}
					style={styles.formMapView}/>
				<TouchableOpacity
					onPress={this.onSaveLocationButtonPressed}
					style={styles.saveLocationButtonButton}>
					<Text
						style={styles.saveLocationButtonButtonText}>Save Location!</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	backButtonButtonImage: {
		resizeMode: "contain",
	},
	backButtonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 8,
		height: 14,
		marginLeft: 36,
		marginTop: 59,
	},
	backButtonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pageTitleDrawEvText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 306,
		marginLeft: 20,
		marginTop: 29,
	},
	formLineView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 64,
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
	inputEventNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		marginTop: 12,
	},
	lineView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	formMapView: {
		backgroundColor: "transparent",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flex: 1,
		marginLeft: 30,
		marginRight: 28,
		marginTop: 25,
		marginBottom: 14,
	},
	saveLocationButtonButton: {
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
	saveLocationButtonButtonText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	saveLocationButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
