const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {},
}

// -------------------------------------------------------------------------

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH':
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      }
    case 'NOT_AUTH':
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {},
      }
    default:
      return state
  }
}
