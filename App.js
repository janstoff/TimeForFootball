import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { primaryBrandColor, secondaryBrandColor, primaryColorLight, white } from './utils/colors'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './containers/Home_Screen'
import LoginScreen from './containers/Login_Screen'
import ProfileScreen from './containers/Profile_Screen'
import SettingsScreen from './containers/Settings_Screen'

function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const AppNavigator = StackNavigator(
	{
		Login: {
			screen: LoginScreen
		},
		Home: {
			screen: HomeScreen
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				title: 'Profile', //your name
				headerTintColor: white,
				headerStyle: {
					backgroundColor: primaryColorLight,
					height: 50
				}
			}
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: {
				title: 'Settings',
				headerTintColor: white,
				headerStyle: {
					backgroundColor: primaryColorLight,
					height: 50
				}
			}
		}
	},
	{
		initialRouteName: 'Home', //for development normally Login or Home depending on status
		headerMode: 'screen'
	}
)

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<CustomStatusBar backgroundColor={primaryBrandColor} barStyle="light-content" />
				<AppNavigator />
			</View>
		)
	}
}
