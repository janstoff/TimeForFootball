import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import { Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { primaryBrandColor, secondaryBrandColor, primaryColorLight, white } from './utils/colors'
import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/Welcome_Screen'
import AuthScreen from './screens/Auth_Screen'
import LoginScreen from './screens/Login_Screen'
import LoginEmailScreen from './screens/LoginEmail_Screen'
import HomeScreen from './screens/Home_Screen'
import ProfileScreen from './screens/Profile_Screen'
import SettingsScreen from './screens/Settings_Screen'

function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const AppNavigator = StackNavigator(
	{
		Welcome: {
			screen: WelcomeScreen
		},
		Authentication: {
			screen: AuthScreen
		},
		Login: {
			screen: LoginScreen
		},
		LoginEmail:{
			screen: LoginEmailScreen,
			navigationOptions: {
				title: 'Login with your Email',
				headerTintColor: white,
				headerStyle: {
					backgroundColor: primaryBrandColor,
					height: 50
				}
			}
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
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<CustomStatusBar backgroundColor={primaryBrandColor} barStyle="light-content" />
					<AppNavigator />
				</View>
			</Provider>
		)
	}
}
