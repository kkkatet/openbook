import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../../actions'

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      }
    default:
      return state
  }
}
