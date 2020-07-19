//
//  App.js
//  Thirsty Hippo BLANK v2
//
//  Created by William Doxey.
//  Copyright © 2018 Thirsty Hippo. All rights reserved.
//

import * as Font from "expo-font"
import AdminAddress from "./App/AdminAddress/AdminAddress"
import AdminContact from "./App/AdminContact/AdminContact"
import AdminCreateEvent from "./App/AdminCreateEvent/AdminCreateEvent"
import AdminCreatePreorderMenu from "./App/AdminCreatePreorderMenu/AdminCreatePreorderMenu"
import AdminDrawEventLocation from "./App/AdminDrawEventLocation/AdminDrawEventLocation"
import AdminError from "./App/AdminError/AdminError"
import AdminEventRevenueAnalysis from "./App/AdminEventRevenueAnalysis/AdminEventRevenueAnalysis"
import AdminEvents from "./App/AdminEvents/AdminEvents"
import AdminForgotPassword from "./App/AdminForgotPassword/AdminForgotPassword"
import AdminHowToGuide from "./App/AdminHowToGuide/AdminHowToGuide"
import AdminInformation from "./App/AdminInformation/AdminInformation"
import AdminLogin from "./App/AdminLogin/AdminLogin"
import AdminMenu from "./App/AdminMenu/AdminMenu"
import AdminPreorderConfirmed1Item from "./App/AdminPreorderConfirmed1Item/AdminPreorderConfirmed1Item"
import AdminPreorderConfirmed2Items from "./App/AdminPreorderConfirmed2Items/AdminPreorderConfirmed2Items"
import AdminPreorderConfirmed3Items from "./App/AdminPreorderConfirmed3Items/AdminPreorderConfirmed3Items"
import AdminPreorderQue from "./App/AdminPreorderQue/AdminPreorderQue"
import AdminPrivacyPolicy from "./App/AdminPrivacyPolicy/AdminPrivacyPolicy"
import AdminProfileAndSettings from "./App/AdminProfileAndSettings/AdminProfileAndSettings"
import AdminSignUp from "./App/AdminSignUp/AdminSignUp"
import AdminSignUpInformation from "./App/AdminSignUpInformation/AdminSignUpInformation"
import React from "react"
import UserAddNewCard from "./App/UserAddNewCard/UserAddNewCard"
import UserAddYourCard from "./App/UserAddYourCard/UserAddYourCard"
import UserContact from "./App/UserContact/UserContact"
import UserEnterPhoneNumber from "./App/UserEnterPhoneNumber/UserEnterPhoneNumber"
import UserError from "./App/UserError/UserError"
import UserExplanation from "./App/UserExplanation/UserExplanation"
import UserHowToGuide from "./App/UserHowToGuide/UserHowToGuide"
import UserMenu from "./App/UserMenu/UserMenu"
import UserMyInformationAndNotifications from "./App/UserMyInformationAndNotifications/UserMyInformationAndNotifications"
import UserPastOrders from "./App/UserPastOrders/UserPastOrders"
import UserPaymentMethod from "./App/UserPaymentMethod/UserPaymentMethod"
import UserPhoneVerification from "./App/UserPhoneVerification/UserPhoneVerification"
import UserPreorderMenu from "./App/UserPreorderMenu/UserPreorderMenu"
import UserPrivacyPolicy from "./App/UserPrivacyPolicy/UserPrivacyPolicy"
import UserProfileAndSettings from "./App/UserProfileAndSettings/UserProfileAndSettings"
import UserSearch from "./App/UserSearch/UserSearch"
import UserWelcome from "./App/UserWelcome/UserWelcome"
import UserYourPreorder1Item from "./App/UserYourPreorder1Item/UserYourPreorder1Item"
import UserYourPreorder2Items from "./App/UserYourPreorder2Items/UserYourPreorder2Items"
import UserYourPreorder3Items from "./App/UserYourPreorder3Items/UserYourPreorder3Items"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	UserWelcome: {
		screen: UserWelcome,
	},
	UserEnterPhoneNumber: {
		screen: UserEnterPhoneNumber,
	},
	UserPhoneVerification: {
		screen: UserPhoneVerification,
	},
	UserExplanation: {
		screen: UserExplanation,
	},
}, {
	initialRouteName: "UserWelcome",
})

const PushRouteTwo = createStackNavigator({
	AdminLogin: {
		screen: AdminLogin,
	},
	AdminSignUp: {
		screen: AdminSignUp,
	},
	AdminForgotPassword: {
		screen: AdminForgotPassword,
	},
	AdminSignUpInformation: {
		screen: AdminSignUpInformation,
	},
	AdminMenu: {
		screen: AdminMenu,
	},
	AdminHowToGuide: {
		screen: AdminHowToGuide,
	},
	AdminPrivacyPolicy: {
		screen: AdminPrivacyPolicy,
	},
	AdminEvents: {
		screen: AdminEvents,
	},
	AdminEventRevenueAnalysis: {
		screen: AdminEventRevenueAnalysis,
	},
	AdminProfileAndSettings: {
		screen: AdminProfileAndSettings,
	},
	AdminAddress: {
		screen: AdminAddress,
	},
	AdminCreateEvent: {
		screen: AdminCreateEvent,
	},
	AdminDrawEventLocation: {
		screen: AdminDrawEventLocation,
	},
	AdminCreatePreorderMenu: {
		screen: AdminCreatePreorderMenu,
	},
	AdminPreorderQue: {
		screen: AdminPreorderQue,
	},
	AdminContact: {
		screen: AdminContact,
	},
	UserWelcome: {
		screen: UserWelcome,
	},
	AdminInformation: {
		screen: AdminInformation,
	},
}, {
	initialRouteName: "AdminLogin",
})

const PushRouteThree = createStackNavigator({
	UserMenu: {
		screen: UserMenu,
	},
	UserHowToGuide: {
		screen: UserHowToGuide,
	},
	UserPrivacyPolicy: {
		screen: UserPrivacyPolicy,
	},
	UserContact: {
		screen: UserContact,
	},
	UserPastOrders: {
		screen: UserPastOrders,
	},
	UserPaymentMethod: {
		screen: UserPaymentMethod,
	},
	UserAddNewCard: {
		screen: UserAddNewCard,
	},
	UserPreorderMenu: {
		screen: UserPreorderMenu,
	},
	UserSearch: {
		screen: UserSearch,
	},
	UserAddYourCard: {
		screen: UserAddYourCard,
	},
	UserWelcome: {
		screen: UserWelcome,
	},
	UserProfileAndSettings: {
		screen: UserProfileAndSettings,
	},
	UserMyInformationAndNotifications: {
		screen: UserMyInformationAndNotifications,
	},
	UserYourPreorder1Item: {
		screen: UserYourPreorder1Item,
	},
	UserYourPreorder2Items: {
		screen: UserYourPreorder2Items,
	},
	UserYourPreorder3Items: {
		screen: UserYourPreorder3Items,
	},
}, {
	initialRouteName: "UserMenu",
})

const PushRouteFour = createStackNavigator({
	UserPreorderMenu: {
		screen: UserPreorderMenu,
	},
	UserAddYourCard: {
		screen: UserAddYourCard,
	},
	UserMenu: {
		screen: UserMenu,
	},
	UserHowToGuide: {
		screen: UserHowToGuide,
	},
	UserPrivacyPolicy: {
		screen: UserPrivacyPolicy,
	},
	UserContact: {
		screen: UserContact,
	},
	UserPastOrders: {
		screen: UserPastOrders,
	},
	UserPaymentMethod: {
		screen: UserPaymentMethod,
	},
	UserAddNewCard: {
		screen: UserAddNewCard,
	},
	UserSearch: {
		screen: UserSearch,
	},
	UserWelcome: {
		screen: UserWelcome,
	},
	UserProfileAndSettings: {
		screen: UserProfileAndSettings,
	},
	UserMyInformationAndNotifications: {
		screen: UserMyInformationAndNotifications,
	},
	UserYourPreorder1Item: {
		screen: UserYourPreorder1Item,
	},
	UserYourPreorder2Items: {
		screen: UserYourPreorder2Items,
	},
	UserYourPreorder3Items: {
		screen: UserYourPreorder3Items,
	},
}, {
	initialRouteName: "UserPreorderMenu",
})

const PushRouteFive = createStackNavigator({
	UserEnterPhoneNumber: {
		screen: UserEnterPhoneNumber,
	},
}, {
	initialRouteName: "UserEnterPhoneNumber",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
	PushRouteTwo: {
		screen: PushRouteTwo,
	},
	PushRouteThree: {
		screen: PushRouteThree,
	},
	PushRouteFour: {
		screen: PushRouteFour,
	},
	PushRouteFive: {
		screen: PushRouteFive,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Arial-BoldMT": require("./assets/fonts/ArialBold.ttf"),
			"ArialMT": require("./assets/fonts/Arial.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
