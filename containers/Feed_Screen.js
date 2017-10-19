import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {
	white,
	usOpenBlue,
	gray,
	lightGray,
	secondaryBrandColor
} from '../utils/colors'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import MatchCardsContainer from './Feed_MatchCardsContainer'

const DATA = [
	{
		id: 1,
		text: 'Card #1',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
	},
	{
		id: 2,
		text: 'Card #2',
		uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
	},
	{
		id: 3,
		text: 'Card #3',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
	},
	{
		id: 4,
		text: 'Card #4',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
	},
	{
		id: 5,
		text: 'Card #5',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
	},
	{
		id: 6,
		text: 'Card #6',
		uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
	},
	{
		id: 7,
		text: 'Card #7',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
	},
	{
		id: 8,
		text: 'Card #8',
		uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
	}
]

export default class FeedScreen extends Component {

	render() {
		const { navigation } = this.props

		return (
			<View style={styles.container}>
				<View>
					<Text>Feed</Text>
					<MatchCardsContainer
						data={DATA}
						renderCard={this.renderCard}
						renderNoMoreCards={this.renderNoMoreCards}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
