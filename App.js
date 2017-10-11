import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { blue, white } from './utils/colors'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import LoginScreen from './containers/LoginScreen'
import ProfileScreen from './containers/ProfileScreen'
import NotificationScreen from './containers/NotificationScreen'

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
			screen: ProfileScreen
		},
		Notifications: {
			screen: NotificationScreen,
			navigationOptions: {
				title: 'Messages',
				headerTintColor: white,
				headerStyle: {
					backgroundColor: blue,
					height: 20
				}
			}
		}
	},
	{ headerMode: 'screen' }
)

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<CustomStatusBar backgroundColor={blue} barStyle="light-content" />
				<AppNavigator />
			</View>
		)
	}
}
