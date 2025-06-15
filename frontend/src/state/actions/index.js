export const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book
})

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id
})

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginStart = () => ({
  type: LOGIN_START
})

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token }
})

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error
})

export const logout = () => ({
  type: LOGOUT
})

export const loginUser = (email, password, isLogin) => {
  return async dispatch => {
    dispatch(loginStart())
    try {
      const endpoint = isLogin ? '/login' : '/register'
      const response = await fetch(`http://localhost:4001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed')
      }

      dispatch(loginSuccess({ email }, data.token))
      localStorage.setItem('token', data.token)
      return { success: true }
    } catch (error) {
      dispatch(loginFailure(error.message))
      return { success: false, error: error.message }
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch(logout())
  }
}

export const checkAuth = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const response = await fetch('http://localhost:4001/check-auth', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.ok) {
        const { email } = await response.json()
        dispatch(loginSuccess({ email }, token))
      } else {
        localStorage.removeItem('token')
      }
    } catch (error) {
      localStorage.removeItem('token')
    }
  }
}
