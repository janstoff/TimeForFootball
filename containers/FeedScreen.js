import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { white, usOpenBlue, gray, lightGray, secondaryBrandColor } from '../utils/colors'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import FeedSwipeContainer from './FeedSwipeContainer'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


export default class FeedScreen extends Component {

  renderCard(card) {
    return(
      <Card
          key={card.id}
          title={card.text}
          image={{ uri: card.uri }}
        >
          <Text style={{ marginBottom: 10 }}>
            I can customize the card further.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor={secondaryBrandColor}
            title="View Now!"
          />
      </Card>
    )
  }

  render() {
    const { navigation } = this.props

    return(
      <View style={styles.container}>
        <View>
          <Text>Feed</Text>
          <FeedSwipeContainer
            data={DATA}
            renderCard={this.renderCard}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
