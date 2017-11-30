import { tripReducer } from './tripReducer.js'
import { userReducer } from './userReducer.js'
import { createTripReducer } from './createTripReducer'
import { combineReducers } from 'redux'


export default function rootReducer(
  state = {trips: [], selectedTrip: {}}, action){
    switch (action.type){
      case "SELECT_TRIP":
        return Object.assign({}, state, {selectTrip: action.payload})
      default:
        return state
    }
  }
