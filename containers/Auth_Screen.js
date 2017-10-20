import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { white, primaryBrandColor } from '../utils/colors'


class AuthScreen extends Component {
	static navigationOptions = { header: null }

	componentDidMount() {
    AsyncStorage.removeItem('TimeForFootball-facebook-token')
		this.props.facebookLogin()
	}

	render() {
		return <KeyboardAvoidingView behavior="padding" style={styles.container} />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: primaryBrandColor
	}
})

export default connect(null, actions)(AuthScreen)
