import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { primaryBrandColor, primaryColorLight, secondaryBrandColor, white, gray} from '../utils/colors'



export default class SettingsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text>Settings</Text>
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
    backgroundColor: secondaryBrandColor,
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
