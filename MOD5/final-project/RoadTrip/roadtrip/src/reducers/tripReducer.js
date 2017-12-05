// function tripReducer(
//   state = {trips: [], selectedTrip: {}}, action){
//     switch (action.type){
//       case "SELECT_TRIP":
//         return Object.assign({}, state, {selectTrip: action.payload})
//       case "FETCH_TRIPS":
//         console.log("REDUCER FOR TRIPS", action.payload);
//         return {...state, trips: action.payload, isLoading: false}
//       default:
//         return state
//     }
//   }
//   export default tripReducer
export default function tripReducer(
  state = {
    rides: [],
    driver: {},
    passengers:[],
    selectedRide: {},
    trip: {}
  },
  action
) {
  switch (action.type) {
    case "FETCH_RIDES":
      console.log("REDUCER FOR RIDES", action.payload);
      return {...state, rides: action.payload, isLoading: false}
    case "ADD_NEW_TRIP":
      return Object.assign({}, state, { trips: [...state.trips, action.payload] })
    case "SELECT_TRIP":
      return Object.assign({}, state, {selectedTrip: action.payload})
    case "CHOOSE_DRIVER":
      return Object.assign({}, state, {
        driver: action.payload});
    case "ADD_PASSENGERS":
      return Object.assign({}, state, {riders: [...state.passengers, action.payload]})
    case "LOADING":
      console.log("Loading")
      return {...state}
    default:
      return state;
  }
}


//
// export default function tripReducer(state = {
//     trips: [],
//     selectedTrip: {},
//     isLoading: false
//   }, action) {
//
//   switch(action.type) {
//     case "FETCH_TRIPS":
//       console.log("REDUCER FOR TRIPS", action.payload);
//       return {...state, trips: action.payload, isLoading: false}
//     case "LOADING_TRIPS":
//       return {...state, isLoading: true}
//     default:
//       return state
//   }
//
// }
