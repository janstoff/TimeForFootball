import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { white, primaryBrandColor } from '../utils/colors'

class AuthScreen extends Component {
	static navigationOptions = { header: null }

	componentDidMount() {
		//AsyncStorage.removeItem('TimeForFootball-facebook-token')
		this.props.autoLogin()
		this.onAuthComplete(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps)
	}

	onAuthComplete(props) {
		if (props.token) {
			this.props.navigation.navigate('Home')
		}
		this.props.navigation.navigate('Login')
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

function mapStateToProps({ auth }) {
	return {
		token: auth.token
	}
}

export default connect(mapStateToProps, actions)(AuthScreen)
