import axios from "axios";
import { loginServiceType } from "./log";

export const loginService:loginServiceType = (email, password) => 
  axios
    .post('userlogin', {
      email,
      password
    })


export const logoutService = () => 
  axios
    .post('userlogout')
