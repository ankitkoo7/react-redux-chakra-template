import axios from "../../http/axios";
import { LOGIN_FAILURE } from "../type";

export const loginAction =
  (payload, nagivate) =>
  (dispatch) => {
    return axios
      .post(`/posts`, payload) //Write your own endpoint
      .then(() => {
        localStorage.setItem("accessToken", "some_encrpyted_token_from_response") //storing access-token into localstorage get fron response
        return nagivate("/")
      })
      .catch((error) => {
        localStorage.setItem("accessToken", "some_encrpyted_token_from_response") //remove this after you setup your api endpoints
        return nagivate("/") //remove this after you setup your api endpoints
        dispatch(loginFailure(error));
      });
  };

  const loginFailure = (data) => {
      return {
          type: LOGIN_FAILURE,
          payload: data
      }
  }