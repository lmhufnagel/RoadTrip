import BackendAPI from '../services/BackendAPI.js'

export function fetchUsers() {
  return function(dispatch) {
    BackendAPI.fetchUsers()
      .then(json => {
        dispatch({type: "FETCH_USERS", payload: json.users}
      )})
  }
}

export function createUser(userObj) {
  return function(dispatch) {
    dispatch({type: "CREATING_USER"})
    BackendAPI.createUser(userObj)
      .then(json => {
        dispatch({type: "CREATE_USER", payload: json})
      }
    )
  }
}

// import api from '../services/apiRequests'
//
// export function fetchUsers(){
//   return function(dispatch){
//     dispatch({type: "FETCHING_USERS"})
//     return api().user.fetch()
//       .then(json => {
//         dispatch({type: "FETCHED_USERS", payload: json})
//       })
//   }
// }
//
// export function createUser(user){
//   return function(dispatch){
//     dispatch({
//       type: "CREATE_USER",
//       payload: user
//     })
//     api().user.post(user)
//       .then(json => {
//         dispatch({type: "ADD_ID_TO_NEW_USER", payload: json.id})
//       })
//
//   }
// }
//
// export function patchUser(user){
//   return function(dispatch){
//     api().user.patch(user)
//     dispatch({
//       type: "PATCH_USER",
//       payload: user
//     })
//   }
// }
//
// export function destroyUser(user){
//   return function(dispatch){
//     api().user.destroy(user)
//       .then(json => console.log(json))
//     dispatch({
//       type: "DESTROY_USER",
//       payload: user.cuid
//     })
//   }
// }
//
// export function selectUser(user){
//   return{
//     type: "SELECT_USER",
//     payload: user
//   }
// }
//
//
// export function someActionCreator(json){
//   return {
//     type: "SOME_ACTION",
//     payload: json
//   }
// }
//
//
// export function fetchSomething(){
//   return function(dispatch) {
//     dispatch({type: "FETCHING_USERS"})
//     fetch("SOME_URL")
//       .then(res => res.json())
//       .then(json => {
//         dispatch(someActionCreator(json))
//       })
//   }
// }
