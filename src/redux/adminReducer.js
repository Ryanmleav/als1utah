const initialState = {
  admin: null,
  isLoggedIn: false,
};

const GET_ADMIN = "GET_ADMIN";
const LOGOUT_ADMIN = "LOGOUT_ADMIN";

export function getAdmin(user) {
  return {
    type: GET_ADMIN,
    payload: user,
  };
}

export function logoutAdmin() {
  return {
    type: LOGOUT_ADMIN,
    payload: initialState,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT_ADMIN:
      return initialState;
    default:
      return state;
  }
}
