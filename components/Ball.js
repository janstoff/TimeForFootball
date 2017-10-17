import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { primaryBrandColor, primaryColorLight, secondaryBrandColor, white, gray} from '../utils/colors'



export default class Ball extends Component {

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 300, y: 400 }
    }).start()
  }

  render() {
    return(
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball}></View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: secondaryBrandColor,
    backgroundColor: secondaryBrandColor
  }
})
