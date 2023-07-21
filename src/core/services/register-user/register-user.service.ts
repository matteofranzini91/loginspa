import axios from "axios";
import { ResgisterUserServiceType } from "./register-user";

export const registerUserService:ResgisterUserServiceType = (formValues) => 
  axios
    .post('register-user', {
      formValues
    })
