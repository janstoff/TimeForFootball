import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import { Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { primaryBrandColor, secondaryBrandColor, primaryColorLight, white } from './utils/colors'
import { StackNavigator } from 'react-navigation'
import AuthScreen from './containers/Auth_Screen'
import LoginScreen from './containers/Login_Screen'
import HomeScreen from './containers/Home_Screen'
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
		Authentication: {
			screen: AuthScreen
		},
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
		initialRouteName: 'Authentication', //for development normally Login or Home depending on status
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
