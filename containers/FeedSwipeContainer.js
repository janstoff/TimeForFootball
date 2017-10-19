import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Animated,
	PanResponder,
	Dimensions
} from 'react-native'
import {
	primaryBrandColor,
	primaryColorLight,
	secondaryBrandColor,
	white,
	gray
} from '../utils/colors'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25
const SWIPE_OUT_DURATION = 250

class FeedSwipeContainer extends Component {
	static defaultProps = {
		//define default props here for reusable components not to throw errors
		//when props not yet passed in
		onSwipeRight: () => {},
		onSwipeLeft: () => {}
	}

	constructor(props) {
		super(props)

		const position = new Animated.ValueXY()

		const panResponder = PanResponder.create({
			//configurate PanResponder instance:
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					this.forceSwipe('right')
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					this.forceSwipe('left')
				} else {
					this.resetPosition()
				}
			}
		})

		this.panResponder = panResponder //this.state = { panResponder } in official doc
		this.position = position
		this.state = { index: 0 }
	}

	forceSwipe(direction) {
		const offScreenRespectiveSide =
			direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH

		Animated.timing(this.position, {
			toValue: { x: offScreenRespectiveSide, y: 0 },
			duration: SWIPE_OUT_DURATION
		}).start(() => this.onSwipeComplete(direction))
	}

	onSwipeComplete(direction) {
		const { onSwipeRight, onSwipeLeft, data } = this.props
		const currentCard = data[this.state.index]

		this.position.setValue({ x: 0, y: 0 }) //reset starting position for new (next) card
		this.setState({ index: this.state.index + 1 }) //set index to access new (next) card

		direction === 'right' ? onSwipeRight(currentCard) : onSwipeLeft(currentCard)
	}

	resetPosition() {
		Animated.spring(
			this.position, //starting position = current position
			{ toValue: { x: 0, y: 0 } } //end position = default position
		).start()
	}

	topCardBehavior() {
		const rotationOnSwipe = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.6, 0, SCREEN_WIDTH * 1.6], //*1.x to slow down rotation
			outputRange: ['-120deg', '0deg', '120deg']
		})

		return {
			...this.position.getLayout(), //use spread here in order to combine position and transform into 1 single object
			transform: [{ rotate: rotationOnSwipe }]
		}
	}

	renderCards() {
		const { data, renderCard, renderNoMoreCards } = this.props

		if(this.state.index >= data.length) {
			return renderNoMoreCards()
		}

		return data.map((card, thatcardsIndex) => {
			if (thatcardsIndex < this.state.index) {
				//i.e. if that card has already been swiped
				return null
			}

			if (thatcardsIndex === this.state.index) {
				return (
					<Animated.View
						key={card.id}
						style={this.topCardBehavior()}
						{...this.panResponder.panHandlers}>
						{renderCard(card)}
					</Animated.View>
				)
			}
			return renderCard(card)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View>{this.renderCards()}</View>
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
