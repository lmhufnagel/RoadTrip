//
// export default function userReducer(
//   state = {
//     users: [],
//     currentUser: {},
//     // driver: {}
//     // passengers:[]
//   },
//   action
// ) {
//   switch (action.type) {
//     case "LOGIN":
//       return Object.assign({}, state, { currentUser: action.payload });
    // case "ASSIGN_DRIVER":
    //   return Object.assign({}, state, {
    //     driver: action.payload});
    // case "ASSIGN_PASSENGERS"
    //   return Object.assign({}, state, {passengers: [...state.passengers, action.payload]})
//     default:
//       return state;
//   }
// }



export function userReducer(state = {
  users: [],
}, action) {

  switch(action.type) {
    case "FETCH_USER":
      return {...state, user: action.payload}
    default:
      return state
  }
}
