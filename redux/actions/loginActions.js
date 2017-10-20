import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import { FACEBOOK_AUTH_TOKEN, FACEBOOK_APP_ID } from '../../utils/login'

export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS'
export const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL'

export function facebookLogin() {
	return async dispatch => {
		let token = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN)
		//combining redux-thunk with async await

		if (token) {
			dispatch({
				type: FACEBOOK_LOGIN_SUCCESS,
				token
			})
		} else {
			executeFacebookLogin(dispatch)
      //helper function receives dispatch function for async actions
		}
	}
}

async function executeFacebookLogin(dispatch) {
	let { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile']
  })
  // result object returns a 'type' and a 'token' property
  if(type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItem(FACEBOOK_AUTH_TOKEN, token)
  //defensive code here in order to only dispatch success action in case the token is saved in storage
  dispatch({
    type: FACEBOOK_LOGIN_SUCCESS,
    token
  })
}
