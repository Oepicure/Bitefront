import { combineReducers } from 'redux'
import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_USERNAME, UPDATE_OCCUPATION, UPDATE_USER_LOCATION, UPDATE_ABOUT_USER} from '../actions/types'


//user
const user = (state = {}, action) => {
    switch (action.type) {
        //case LOGIN:
          //return action.payload
        case UPDATE_EMAIL:
          return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
          return { ...state, password: action.payload }
        case UPDATE_USERNAME:
          return { ...state, username: action.payload }
        //case UPDATE_PHOTO:
          //return { ...state, photo: action.payload }
        case UPDATE_OCCUPATION:
          return { ...state, occupation: action.payload }
        case UPDATE_USER_LOCATION:
          return { ...state, userLocation: action.payload }
        case UPDATE_ABOUT_USER:
          return { ...state, aboutUser: action.payload }            
        default:
          return state
    }
}

const rootReducer = combineReducers({
    user,
  })

export default rootReducer