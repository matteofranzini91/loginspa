import axios from "axios";
import { ResgisterUserServiceType, GetUserServiceType, editUserServiceType } from "./user.types";

export const getAuthUserService = () => 
  axios
    .post('authuser')

export const registerUserService:ResgisterUserServiceType = (formValues) => 
  axios
    .post('register-user', {
      formValues
    })

export const getUserByIdService:GetUserServiceType = (userId) => 
  axios
    .post('getuser', {
      userId
    })

export const editUserService:editUserServiceType = (body) => 
  axios
    .put('edit-user', {
      body
    })