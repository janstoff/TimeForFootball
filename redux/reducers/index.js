import { combineReducers } from 'redux'
import auth from './authReducer'
import gestures from './gesturesReducer'


export default combineReducers({
	auth,
	gestures
})
