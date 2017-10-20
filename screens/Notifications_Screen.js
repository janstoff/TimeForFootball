import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { white, usOpenBlue, gray, lightGray, tennisBallGreen } from '../utils/colors'


export default class NotificationScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text>Messages</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
	},
  buttonContainer: {
    backgroundColor: tennisBallGreen,
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
