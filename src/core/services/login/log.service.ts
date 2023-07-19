import axios from "axios";
import { loginServiceType, logoutServiceType } from "./log";

export const loginService:loginServiceType = (email, password) => 
  axios
    .post('userlogin', {
      email,
      password
    })


export const logoutService:logoutServiceType = (email) => 
  axios
    .post('userlogout', {
      email
    })
