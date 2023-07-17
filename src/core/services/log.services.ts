import axios from "axios";
import { loginServiceType, logoutServiceType } from "./log";

export const loginService:loginServiceType = (email, password) => {
  return axios
      .post('userlogin', {
        email,
        password
      })
}

export const logoutService:logoutServiceType = (email) => {
  return axios
      .post('userlogout', {
        email
      })
}