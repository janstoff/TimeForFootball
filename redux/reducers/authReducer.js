import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  OWN_EMAIL_LOGIN_SUCCESS,
  OWN_EMAIL_LOGIN_FAIL
 } from '../actions/loginActions'

export default function(state={}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.facebookToken }
    case FACEBOOK_LOGIN_FAIL:
      return { token: null }
    case GOOGLE_LOGIN_SUCCESS:
      return { token: action.googleToken }
    case GOOGLE_LOGIN_FAIL:
      return { token: null }
    case OWN_EMAIL_LOGIN_SUCCESS:
      return { token: action.emailToken }
    case OWN_EMAIL_LOGIN_FAIL:
      return { token: null }
    default:
      return state
  }
}
