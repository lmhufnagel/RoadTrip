

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

export function fetchRides() {
  return function(dispatch) {
    console.log("FETCHING RIDES");
    dispatch({type: "LOADING_RIDES"})
    BackendAPI.fetchRides()
      .then(json => {
        dispatch({type: "FETCH_RIDES", payload: json})
      }
    )
  }
}

export function reserveSeat(tripObj) {
  return function(dispatch) {
    BackendAPI.reserveSeat(tripObj)
      .then(json => {
        dispatch({type: "RESERVE_SEAT", payload: json})
      })
  }
}

export function selectTrip(trip) {
  return {
    type: "SELECT_TRIP",
    payload: trip
  };
}



export function searchStart(trips, start_location) {
  return function(dispatch) {
    const sortedtrips = trips.filter((trip) => {
      return trip.start_location === start_location
    })

  };
}

export function setFilteredRides(filteredRides) {
  return {
    type: "SET_FILTERED_RIDES",
    payload: filteredRides,
  }
}

export function setLastRideFiltered(filteredRides){
  return{
    type: "LAST_RIDE_FILTERED",
    payload: filteredRides
  }
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
