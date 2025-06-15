const initialState = {
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: (() => {
          const arr = state.cartItems
          const result = []
          let includes = false
          for (const i of arr) {
            if (i.id === action.payload && !includes) {
              includes = true
              continue
            }
            result.push(i)
          }
          console.log(arr, result)
          return result
        })()
      }
    default:
      return state
  }
}

export default cartReducer
