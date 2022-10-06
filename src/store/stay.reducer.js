const initialState = {
  stays: [],
  selectedStay:null,
  countStays: [],
  cart: [],
  lastRemovedStay: null,
  test: true,
  test2: false,
  filterBy:{name:'',type:'',amenities:'',price:0,room:{bathrooms:0,bedrooms:0,roomType:''}}
}
export function stayReducer(state = initialState, action) {
  var newState = state
  var stays
  var cart
  switch (action.type) {
    case 'SET_STAYS':
      // console.log('SET_STAYS:', action.stays)
      newState = { ...state, stays: action.stays }
      break
    case 'SET_COUNT_STAYS':
      // console.log('SET_COUNT_STAYS:', action.stays)
      newState = { ...state, countStays: action.stays }
      break
    case 'REMOVE_STAY':
      const lastRemovedStay = state.stays.find(
        (stay) => stay._id === action.stayId
      )
      stays = state.stays.filter((stay) => stay._id !== action.stayId)
      newState = { ...state, stays, lastRemovedStay }
      break
    case 'ADD_STAY':
      newState = { ...state, stays: [...state.stays, action.stay] }
      break
    case 'UPDATE_STAY':
      stays = state.stays.map((stay) =>
        stay._id === action.stay._id ? action.stay : stay
      )
      newState = { ...state, stays }
      break
    case 'ADD_TO_CART':
      newState = { ...state, cart: [...state.cart, action.stay] }
      break
    case 'REMOVE_FROM_CART':
      cart = state.cart.filter((stay) => stay._id !== action.stayId)
      newState = { ...state, cart }
      break
    case 'CLEAR_CART':
      newState = { ...state, cart: [] }
      break
    case 'SET_SELECT_STAY':
      
      newState = { ...state, selectedStay:action.stay  }
      break
    case 'UNDO_REMOVE_STAY':
      if (state.lastRemovedStay) {
        newState = {
          ...state,
          stays: [...state.stays, state.lastRemovedStay],
          lastRemovedStay: null,
        }
      }
      break
    default:
  }
  // For debug:
  window.stayState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  return newState
}
