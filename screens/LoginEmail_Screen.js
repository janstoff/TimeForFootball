import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	Dimensions
} from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { white, primaryBrandColor, primaryColorLight, secondaryBrandColor, gray, lightGray } from '../utils/colors'

const SCREEN_WIDTH = Dimensions.get('window').width


class LoginEmailScreen extends Component {
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
				<Button
					title='LOGIN'
					color={gray}
					backgroundColor={secondaryBrandColor}
					icon={{ name: 'arrow-with-circle-right', type: 'entypo', color: gray }}
					onPress={() => navigation.navigate('Home')}
					buttonStyle={styles.buttonStyle}
				/>
			</View>
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
	input: {
		height: 50,
		width: SCREEN_WIDTH*0.8,
		backgroundColor: 'rgba(255,255,255,0.3)',
		marginBottom: 15,
		paddingHorizontal: 10,
		color: white
	},
	buttonStyle: {
		width: SCREEN_WIDTH*0.8,
		marginBottom: 15,
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

export default connect(null, actions)(LoginEmailScreen)
