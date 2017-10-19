import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Platform
} from 'react-native'
import { white, rolandCyan, primaryColorLight, gray, lightBlue } from '../utils/colors'
import TopBar from '../components/TopBar'
import { TabNavigator, DrawerNavigator } from 'react-navigation'
import EventsScreen from './Events_Screen'
import FeedScreen from './Feed_Screen'
import PlayersScreen from './Players_Screen'
import ProfileScreen from './Profile_Screen'
import FriendsScreen from './Friends_Screen'
import PitchesScreen from './Pitches_Screen'
import NotificationsScreen from './Notifications_Screen'
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
	Octicons,
	Foundation
} from '@expo/vector-icons'


const MainScreenNavigatorBottom = TabNavigator(
	{
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
		Scheduling: {
			screen: EventsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
				Platform.OS === 'ios' ?  (
				<Ionicons name="ios-calendar" size={30} color={tintColor} />
			) : (
				<Ionicons name="md-calendar" size={25} color={tintColor} />
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
		},
		Notifications: {
			screen: NotificationsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
          Platform.OS === 'ios' ?  (
					<Ionicons name="ios-notifications" size={30} color={tintColor} />
				) : (
          <Ionicons name="md-notifications" size={25} color={tintColor} />
        )
			}
		},
	},
	{
		navigationOptions: {
			headerTintColor: primaryColorLight
		},
		tabBarPosition: 'bottom',
		initialRouteName: 'Feed',
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? primaryColorLight : white,
			activeBackgroundColor: white,
			inactiveTintColor: white,
			showLabel: false,
			showIcon: true,
			swipeEnabled: true,
			style: {
				height: 40,
				backgroundColor: primaryColorLight,
				borderTopColor: lightBlue
			}
		}
	}
)

export default class HomeScreen extends Component {
	static navigationOptions = { header: null }

	render() {
		return (
			<View style={styles.container}>
				<TopBar navigation={this.props.navigation}/>
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
