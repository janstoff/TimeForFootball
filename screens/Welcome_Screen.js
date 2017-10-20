import React, { Component } from 'react'
import {
	View,
  AsyncStorage
} from 'react-native'
import { white, primaryBrandColor, primaryColorLight, secondaryBrandColor, thirdBrandColor } from '../utils/colors'
import { AppLoading } from 'expo'
import _ from 'lodash'
import Slides from '../components/Welcome_Slides'

import FACEBOOK_AUTH_TOKEN from '../utils/login'

const SLIDE_DATA = [
  { text: 'Welcome! It is Time for Football.', color: primaryBrandColor },
  { text: 'Scheduling your playtime has never been easier', color: secondaryBrandColor },
  { text: 'Find Matches in your area', color: thirdBrandColor },
  { text: 'Rate your peers and favourite pro players', color: primaryColorLight }
]

export default class WelcomeScreen extends Component {
  static navigationOptions = { header: null }

  state = {
    token: null
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN)

    if(token) {
      this.props.navigate.navigate('Home')
      this.setState({ token: token })
    } else {
      this.setState({ token: false })
    }
  }

  render() {
    const { token } = this.state

    if(_.isNull(token)) {
      return <AppLoading />
    }

    return(
      <Slides data={SLIDE_DATA} navigation={this.props.navigation}/>
    )
  }
}
