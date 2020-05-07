import { UserTypes } from '../actions/types';

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};
const userState = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_UP_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserTypes.SIGN_IN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.payload.user._id).length > 0,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default userState;
