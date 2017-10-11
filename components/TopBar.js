import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {
	white,
	usOpenBlue,
	gray,
	lightGray,
	tennisBallGreen
} from '../utils/colors'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default class TopBar extends Component {
	render() {
		const { navigation } = this.props

		return (
			<View style={styles.topBar}>
				<TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
					<MaterialCommunityIcons style={styles.logo} name="plus" size={25} />
				</TouchableOpacity>
				<Text style={styles.appName}>Time For Football</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Messages')}>
					<MaterialIcons style={styles.logo} name="message" size={25} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		height: 50,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: gray,
		justifyContent: 'space-between',
		backgroundColor: usOpenBlue
	},
	appName: {
		color: white,
		padding: 15,
		opacity: 0.95,
		fontSize: 16,
		fontWeight: '700'
	},
	logo: {
		color: white,
		padding: 10
	},
	buttonContainer: {
		backgroundColor: tennisBallGreen,
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
