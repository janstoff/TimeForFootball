import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Platform
} from 'react-native'
import { white, rolandCyan, blue, gray } from '../utils/colors'
//import TopBar from '../components/TopBar'
import { TabNavigator } from 'react-navigation'
import NotificationScreen from './NotificationScreen'
import CalendarScreen from './CalendarScreen'
import FeedScreen from './FeedScreen'
import PlayersScreen from './PlayersScreen'
import ProfileScreen from './ProfileScreen'
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
	Octicons
} from '@expo/vector-icons'

const MainScreenNavigatorBottom = TabNavigator(
	{
		Calendar: {
			screen: CalendarScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
          Platform.OS === 'ios' ?  (
          <Ionicons name="ios-calendar" size={30} color={tintColor} />
        ) : (
          <Ionicons name="md-calendar" size={25} color={tintColor} />
        )
      }
    },
		Feed: {
			screen: FeedScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
          Platform.OS === 'ios' ?  (
					<Ionicons name="ios-football-outline" size={30} color={tintColor} />
				) : (
          <Ionicons name="ios-football-outline" size={25} color={tintColor} />
        )
			}
		},
		Players: {
			screen: PlayersScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
					Platform.OS === 'ios' ? (
						<Ionicons name="ios-speedometer" size={30} color={tintColor} />
					) : (
						<MaterialCommunityIcons name="speedometer" size={25} color={tintColor} />
					)
			}
		}
	},
	{
		navigationOptions: {
			headerTintColor: blue
		},
		//tabBarPosition: undefined,
		initialRouteName: 'Feed',
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? blue : white,
			activeBackgroundColor: white,
			inactiveTintColor: white,
			showLabel: false,
			showIcon: true,
			style: {
				backgroundColor: blue
			}
		}
	}
)

export default class HomeScreen extends Component {
	static navigationOptions = { header: null }

	render() {
		return (
			<View style={styles.container}>
				<MainScreenNavigatorBottom navigation={this.props.navigation} />
			</View>
		)
	}
}
HomeScreen.router = MainScreenNavigatorBottom.router

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white
	},
	buttonContainer: {
		backgroundColor: rolandCyan,
		paddingVertical: 15,
		shadowRadius: 2,
		shadowOpacity: 0.5,
		shadowColor: gray,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonText: {
		textAlign: 'center',
		color: white,
		fontWeight: '600'
	}
})
