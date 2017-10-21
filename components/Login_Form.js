import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text
} from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { white, secondaryBrandColor, gray, lightGray, facebookPrimary, googlePrimary } from '../utils/colors'

class LoginForm extends Component {
	render() {
		const { navigation, executeFacebookLogin } = this.props

		return (
			<View style={styles.container}>
				<TextInput
					placeholder="username or email"
					placeholderTextColor={lightGray}
					returnKeyType="next"
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input}
					onSubmitEditing={() => this.passwordInput.focus()}
				/>
				<TextInput
					placeholder="password"
					placeholderTextColor={lightGray}
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={input => (this.passwordInput = input)}
				/>
				<TouchableOpacity
					style={[
						styles.buttonContainer,
						{ backgroundColor: secondaryBrandColor }
					]}
					onPress={() => navigation.navigate('Home')}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<Text style={{marginVertical: 10, color: white, textAlign: 'center' }}> --- or --- </Text>
				<Button
          title='login with facebook'
          color='white'
          backgroundColor={facebookPrimary}
          icon={{ name: 'facebook-square', type: 'font-awesome' }}
					onPress={() => executeFacebookLogin()}
				/>
        <Button
          title='login with Google'
          color='white'
          backgroundColor={googlePrimary}
          icon={{ name: 'google', type: 'font-awesome' }}
					onPress={() => console.log('google Login')}
          buttonStyle={{ marginTop: 10 }}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 50,
		width: 300,
		backgroundColor: 'rgba(255,255,255,0.3)',
		marginBottom: 15,
		paddingHorizontal: 10,
		color: white
	},
	buttonContainer: {
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

export default connect(null, actions)(LoginForm)
