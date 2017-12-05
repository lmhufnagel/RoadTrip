import { tripReducer } from './tripReducer.js'
import { userReducer } from './userReducer.js'
import { createTripReducer } from './createTripReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  // trips: tripReducer,
  // user: userReducer,
  // newTrip: createTripReducer
})
// export default function rootReducer(
  // state = {trips: [], selectedTrip: {}}, action){
  //   switch (action.type){
  //     case "SELECT_TRIP":
  //       return Object.assign({}, state, {selectTrip: action.payload})
  //     case "FETCH_TRIPS":
  //       console.log("REDUCER FOR TRIPS", action.payload);
  //       return {...state, trips: action.payload, isLoading: false}
  //     default:
  //       return state
  //   }
  // }
