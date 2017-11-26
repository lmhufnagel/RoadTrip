// export function addNewTrip(trip){
//   return {
//     type: "ADD_NEW_TRIP",
//     payload: trip
//   }
// }
//
// export function selectTrip(trip){
//   return{
//     type: "SELECT_TRIP",
//     payload: trip
//   }
// }
//
// export function chooseDriver(user){
//   return{
//     type: "CHOOSE_DRIVER",
//     payload: user
//   }
// }
//
// export function addPassenger(user){
//   return{
//     type: "ADD_PASSENGER",
//     payload: user
//   }
// }
//
// export function loading() {
//   return{
//     type: "LOADING",
//     payload: ...state
//   }
// }

import BackendAPI from '../services/BackendAPI.js'

export function fetchUsers() {
  return function(dispatch) {
    BackendAPI.fetchUsers()
      .then(json => {
        dispatch({type: "FETCH_USERS", payload: json}
      )})
  }
}

export function fetchTrips(searchTerm) {
  return function(dispatch) {
    dispatch({type: "LOADING_TRIPS"})
    BackendAPI.fetchTrips(searchTerm)
      .then(json => {
        dispatch({type: "FETCH_TRIPS", payload: json}
      )})
  }
}
