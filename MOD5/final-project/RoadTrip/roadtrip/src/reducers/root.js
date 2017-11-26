import { tripReducer } from './tripReducer.js'
import { userReducer } from './userReducer.js'
import { createTripReducer } from './createTripReducer'
import { combineReducers } from 'redux'


export const root = combineReducers({
  trips: tripReducer,
  users: userReducer,
  newTrip: createTripReducer
})
