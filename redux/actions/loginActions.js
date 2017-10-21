import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import { FACEBOOK_AUTH_TOKEN, GOOGLE_AUTH_TOKEN, OWN_EMAIL_AUTH_TOKEN, FACEBOOK_APP_ID } from '../../utils/login'

export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS'
export const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL'
export const OWN_EMAIL_LOGIN_SUCCESS = 'OWN_EMAIL_LOGIN_SUCCESS'
export const OWN_EMAIL_LOGIN_FAIL = 'OWN_EMAIL_LOGIN_FAIL'

export function autoLogin() {
	return async dispatch => {
		//combining redux-thunk with async await
		let facebookToken = await AsyncStorage.getItem(FACEBOOK_AUTH_TOKEN)
		let googleToken = await AsyncStorage.getItem(GOOGLE_AUTH_TOKEN)
		let emailToken = await AsyncStorage.getItem(OWN_EMAIL_AUTH_TOKEN)

		if (facebookToken) {
			return dispatch({
				type: FACEBOOK_LOGIN_SUCCESS,
				facebookToken
			})
		} else if(googleToken){
			return dispatch({
				type: GOOGLE_LOGIN_SUCCESS,
				googleToken
			})
		} else if(emailToken) {
			return dispatch({
				type: OWN_EMAIL_LOGIN_SUCCESS,
				emailToken
			})
		}
	}
}

export function executeFacebookLogin() {
	return async dispatch => {
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
}
