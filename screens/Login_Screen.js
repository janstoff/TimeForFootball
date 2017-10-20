import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Image,
	Text,
	KeyboardAvoidingView,
	Animated
} from 'react-native'
import { connect } from 'react-redux'
import LoginForm from '../components/Login_Form'
import { white, primaryBrandColor } from '../utils/colors'
import * as actions from '../redux/actions'

class LoginScreen extends Component {
	static navigationOptions = { header: null }

	state = {
		opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
	}

	componentDidMount() {
		const { opacity, width, height } = this.state

		Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
		//which state to change, to which value, during which time
    Animated.spring(width, { toValue: 150, speed: 5 }).start()
    Animated.spring(height, { toValue: 150, speed: 5 }).start()
	}

	render() {
		const { opacity, width, height } = this.state

		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<Text style={styles.appName}>Time For Football</Text>
				<View style={styles.logoContainer}>
					<Animated.Image
						style={[styles.logo, { opacity, width, height }]}
						source={require('../assets/visuals/ball.png')}
					/>
					<Text style={styles.title}>
						The best way to organise your play time.
					</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm navigation={this.props.navigation} />
				</View>
			</KeyboardAvoidingView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: primaryBrandColor
	},
	appName: {
		color: white,
		marginTop: 100,
		textAlign: 'center',
		opacity: 0.95,
		fontSize: 22,
		fontWeight: '700'
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1
	},
	logo: {
		width: 150,
		height: 150
	},
	title: {
		color: white,
		fontSize: 16,
		marginTop: 20,
		textAlign: 'center',
		opacity: 0.9,
		width: 180
	}
})


export default connect(null, actions)(LoginScreen)
