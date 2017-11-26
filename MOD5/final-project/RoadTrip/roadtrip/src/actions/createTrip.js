import BackendAPI from '../services/BackendAPI.js'

export function createReservation(tripObj) {
  return function(dispatch) {
    BackendAPI.createReservation(tripObj)
      .then(json => {
        dispatch({type: "CREATE_TRIP"})
      })
  }
}
