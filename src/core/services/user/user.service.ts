import axios from "axios";
import { ResgisterUserServiceType, getUserServiceType } from "./user.types";

export const getAuthUserService = () => 
  axios
    .post('authuser')

export const registerUserService:ResgisterUserServiceType = (formValues) => 
  axios
    .post('register-user', {
      formValues
    })

export const getUserByIdService:getUserServiceType = (userId) => 
  axios
    .post('getuser', {
      userId
    })