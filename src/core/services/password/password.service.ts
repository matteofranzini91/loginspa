import axios from "axios";
import { resetPasswordServiceType } from "./password";

export const resetPassqordService:resetPasswordServiceType = (email) => 
  axios
    .post('reset-password', {
      email
    })
