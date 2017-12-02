

import BackendAPI from '../services/BackendAPI.js'


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

export function fetchTrips() {
  return function(dispatch) {
    console.log("FETCHING TRIPS");
    dispatch({type: "LOADING_TRIPS"})
    BackendAPI.fetchTrips()
      .then(json => {
        dispatch({type: "FETCH_TRIPS", payload: json})
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
