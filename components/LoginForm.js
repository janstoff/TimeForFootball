import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import { white, rolandCyan, gray, lightGray } from '../utils/colors'


export default class LoginForm extends Component {
  render() {
    const { navigation } = this.props

    return(
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
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 50,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    paddingHorizontal: 10,
    color: white
  },
  buttonContainer: {
    backgroundColor: rolandCyan,
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
