import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Image,
	Text,
	KeyboardAvoidingView,
	Animated,
	Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { white, gray, lightGray, superLightGray, primaryBrandColor, primaryColorLight, secondaryBrandColor, facebookPrimary, googlePrimary, twitterLogoBlue, twitterDarkBlue } from '../utils/colors'
import * as actions from '../redux/actions'

const SCREEN_WIDTH = Dimensions.get('window').width


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
		const { opacity, width, height, emailLoginOpen } = this.state
		const { executeFacebookLogin, navigation } = this.props


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
				{emailLoginOpen ? (
					<View>
						<LoginForm navigation={this.props.navigation} />
					</View>
				) : (
					<View>
						<Button
		          title='login with facebook'
		          color='white'
		          backgroundColor={facebookPrimary}
		          icon={{ name: 'facebook-square', type: 'font-awesome' }}
							onPress={() => executeFacebookLogin()}
							buttonStyle={styles.buttonStyle}
						/>
		        <Button
		          title='login with Google'
		          color='white'
		          backgroundColor={googlePrimary}
		          icon={{ name: 'google', type: 'font-awesome' }}
							onPress={() => console.log('google Login')}
		          buttonStyle={styles.buttonStyle}
						/>
						{/*
						<Button
		          title='login with Twitter'
		          color={twitterDarkBlue}
		          backgroundColor={superLightGray}
		          icon={{ name: 'twitter', type: 'font-awesome', color: twitterLogoBlue }}
							onPress={() => console.log('Twitter Login')}
		          buttonStyle={styles.buttonStyle}
						/>
						*/}
						<Button
		          title='login with Email'
		          color={gray}
		          backgroundColor={secondaryBrandColor}
							iconLeft
		          icon={{ name: 'mail', type: 'entypo', color: gray }}
							onPress={() => navigation.navigate('LoginEmail')}
		          buttonStyle={styles.buttonStyle}
						/>
					</View>
				)}
			</KeyboardAvoidingView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: primaryBrandColor
	},
	appName: {
		color: white,
		marginTop: 30,
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
	},
	buttonStyle: {
		width: SCREEN_WIDTH*0.8,
		marginBottom: 20,
		borderRadius: 2.5,
		shadowRadius: 2.5,
		shadowOpacity: 0.4,
		shadowColor: primaryColorLight,
		shadowOffset: {
			width: 0,
			height: 3
		}
	}
})


export default connect(null, actions)(LoginScreen)
