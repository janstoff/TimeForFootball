import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Animated,
	PanResponder
} from 'react-native'
import {
	primaryBrandColor,
	primaryColorLight,
	secondaryBrandColor,
	white,
	gray
} from '../utils/colors'

class FeedSwipeContainer extends Component {
	constructor(props) {
		super(props)

    const position = new Animated.ValueXY()

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
			  position.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderRelease: () => {}
		})

    this.panResponder = panResponder //this.state = { panResponder } in official doc
		this.position = position
	}

	renderCards() {
		const { data, renderCard } = this.props

		return data.map(card => {
			return renderCard(card)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.View
          style={this.position.getLayout()}
          { ...this.panResponder.panHandlers }
        >
          {this.renderCards()}
        </Animated.View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
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

export default FeedSwipeContainer
