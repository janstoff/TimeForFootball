import React, { Component } from 'react'
import {
	View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import { white, secondaryBrandColor } from '../utils/colors'
import { Button } from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
  render() {
    const { data, navigation } = this.props

    return(
      <ScrollView
          horizontal //={true}
          pagingEnabled
          style={styles.container}
        >
          {data.map((slide, index) => {
            return(
              <View style={[styles.slide, { backgroundColor: slide.color }]} key={slide.text}>
                <Text style={styles.text}>{slide.text}</Text>
                {index === data.length - 1 && (
                    <Button
                      buttonStyle={styles.button}
                      title="Get Started!"
                      onPress={() => navigation.navigate('Login')}
                    />
                )}
              </View>
            )
          })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
  slide: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 30,
    color: white,
    textAlign: 'center'
  },
  button: {
    backgroundColor: secondaryBrandColor,
    marginTop: 100
  }
})


export default Slides
