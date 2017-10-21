import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import {
	white,
	primaryBrandColor,
	primaryColorLight,
	secondaryBrandColor,
	thirdBrandColor
} from '../utils/colors'
import { AppLoading } from 'expo'
import _ from 'lodash'
import Slides from '../components/Welcome_Slides'
import {
	FACEBOOK_AUTH_TOKEN,
	GOOGLE_AUTH_TOKEN,
	OWN_EMAIL_AUTH_TOKEN
} from '../utils/login'

const SLIDE_DATA = [
	{ text: 'Welcome! It is Time for Football.', color: primaryBrandColor },
	{
		text: 'Scheduling your playtime has never been easier',
		color: secondaryBrandColor
	},
	{ text: 'Find Matches in your area', color: thirdBrandColor },
	{
		text: 'Rate your peers and favourite pro players',
		color: primaryColorLight
	}
]

export default class WelcomeScreen extends Component {
	static navigationOptions = { header: null }

	state = {
		token: null
	}

	async componentWillMount() {
		let facebookToken = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN)
		let googleToken = await AsyncStorage.getItem(GOOGLE_AUTH_TOKEN)
		let emailToken = await AsyncStorage.getItem(OWN_EMAIL_AUTH_TOKEN)

		if (facebookToken) {
			this.props.navigate.navigate('Home')
			this.setState({ token: facebookToken })
		} else if (googleToken) {
			this.props.navigate.navigate('Home')
			this.setState({ token: googleToken })
		} else if (emailToken) {
			this.props.navigate.navigate('Home')
			this.setState({ token: emailToken })
		} else {
			this.setState({ token: false })
		}
	}

	render() {
		const { token } = this.state

		if (_.isNull(token)) {
			return <AppLoading />
		}

		return <Slides data={SLIDE_DATA} navigation={this.props.navigation} />
	}
}
