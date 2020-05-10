import axios from 'axios';
import { UserTypes, serverPath } from './types';

export const signUp = (userData) => (dispatch) => {
  axios
    .post(`${serverPath.user}/signup`, userData)
    .then((response) => {
      dispatch({
        type: UserTypes.SIGN_UP_USER,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signIn = function (userData) {
  return (dispatch) => {
    axios
      .post(`${serverPath.user}/login`, userData)
      .then((response) => {
        dispatch({
          type: UserTypes.SIGN_IN_USER,
          payload: response.data.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const getAuthUser = () => (dispatch) => {
  axios
    .get(`${serverPath.user}/me`)
    .then((response) => {
      dispatch({
        type: UserTypes.AUTH_USER,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: UserTypes.AUTH_USER,
        payload: {},
      });
    });
};
