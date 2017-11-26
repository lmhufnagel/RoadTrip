//
// export default function tripReducer(
//   state = {
//     trips: [],
//     driver: {}
//     passengers:[]
//     selectedTrip: {}
//   },
//   action
// ) {
//   switch (action.type) {
//     case "ADD_NEW_TRIP":
//       return Object.assign({}, state, { trips: [...state.trips, action.payload] })
//     case "SELECT_TRIP":
//       return Object.assign({}, state, {selectedTrip: action.payload})
//     case "CHOOSE_DRIVER":
//       return Object.assign({}, state, {
//         driver: action.payload});
//     case "ADD_PASSENGERS":
//       return Object.assign({}, state, {passengers: [...state.passengers, action.payload]})
//     case "LOADING":
//       console.log("Loading")
//       return {...state}
//     default:
//       return state;
//   }
// }



export function tripReducer(state = {
    trips: [],
    list: [],
    selectedTrip: {},
    isLoading: false
  }, action) {

  switch(action.type) {
    case "FETCH_TRIPS":
      return {...state, list: action.payload, isLoading: false}
    case "LOADING_TRIPS":
      return {...state, isLoading: true}
    default:
      return state
  }

}
