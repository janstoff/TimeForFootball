import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { white, usOpenBlue, gray, lightGray, tennisBallGreen } from '../utils/colors'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'



export default class FeedScreen extends Component {
  render() {
    const { navigation } = this.props

    return(
      <View style={styles.container}>
        <View>
          <Text>Feed</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
  					<MaterialCommunityIcons name="plus" size={25} />
  				</TouchableOpacity>
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
