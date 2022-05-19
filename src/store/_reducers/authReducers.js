import { LOGIN_FAILURE } from "../type";

const initialState = {
  loginFailure: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
