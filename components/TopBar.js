import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Platform
} from 'react-native'
import {
	white,
	primaryBrandColor,
	primaryColorLight,
	secondaryBrandColor,
	gray,
	lightGray
} from '../utils/colors'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

export default class TopBar extends Component {
	render() {
		const { navigation } = this.props

		return (
			<View style={styles.topBar}>
				<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Ionicons
						style={styles.logo}
						name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
						size={25}
					/>
				</TouchableOpacity>
				<Text
					style={
						Platform.OS === 'ios'
							? styles.brandNameIos
							: styles.brandNameAndroid
					}>
					Time For Football
				</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
					<MaterialIcons style={styles.logo} name="message" size={25} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		height: 40,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: gray,
		justifyContent: 'space-between',
		backgroundColor: primaryColorLight
	},
	brandNameIos: {
		color: white,
		padding: 10,
		opacity: 0.95,
		fontSize: 16,
		fontWeight: '700'
	},
	brandNameAndroid: {
		color: white,
		padding: 10,
		opacity: 0.95,
		fontSize: 16,
		fontWeight: '700'
	},
	logo: {
		color: white,
		padding: 10
	},
	buttonContainer: {
		backgroundColor: secondaryBrandColor,
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
		color: white
	}
})
