const initialState = {
  user: null,
  isLoggedIn: false
}

const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function getAdmin(user) {
  return {
    type: GET_USER,
    payload: user
  }
}

export function logoutAdmin() {
  return {
    type: LOGOUT_USER,
    payload: initialState
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      }
    case LOGOUT_USER:
      return initialState;
    default: return state
  }
}