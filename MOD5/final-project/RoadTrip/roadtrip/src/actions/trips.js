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

// import BackendAPI from '../services/BackendAPI.js'
//
// export function fetchUsers() {
//   return function(dispatch) {
//     BackendAPI.fetchUsers()
//       .then(json => {
//         dispatch({type: "FETCH_USERS", payload: json}
//       )})
//   }
// }

import BackendAPI from '../services/BackendAPI.js'


export function fetchTrips() {
  return function(dispatch) {
    BackendAPI.fetchTrips()
      .then(json => {
        dispatch({type: "FETCH_TRIPS", payload: json}
      )})
  }
}


export function createTrip(tripObj) {
  return function(dispatch) {
    dispatch({type: "CREATING_TRIP"})
    BackendAPI.createTrip(tripObj)
      .then(json => {
        dispatch({type: "CREATE_TRIP", payload: json})
      }
    )
  }
}

export function fetchTrip(id) {
  return function(dispatch) {
    dispatch({type: "LOADING_TRIPS"})
    BackendAPI.fetchTrip(id)
      .then(json => {
        dispatch({type: "FETCH_TRIP", payload: json})
      }
    )
  }
}

export function reserveSeat(tripObj) {
  return function(dispatch) {
    BackendAPI.reserveSeat(tripObj)
      .then(json => {
        dispatch({type: "RESERVE_SEAT"})
      })
  }
}

export function selectTrip(trip) {
  return {
    type: "SELECT_TRIP",
    payload: trip
  };
}


//write reserveSeat function

// export function filterTrips(start_location, end_location, trips) {
//   return function(dispatch) {
//     const sortedTrips = Trips.filter((trip) => {
//
//       return trip.start_location.toLowerCase() === end_location.toLowerCase() && trip.end_location.toLowerCase() === end_location.toLowerCase()
//     })
//     dispatch(setCurrentTrips(sortedTrips))
//   }
// }
