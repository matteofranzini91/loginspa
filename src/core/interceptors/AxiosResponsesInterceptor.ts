import axios, { AxiosError } from "axios";
import { errorController } from "src/controllers/errors.controller";

export const AxiosResponsesInterceptor = (setOpen: React.Dispatch<React.SetStateAction<boolean>>, setMessage: React.Dispatch<React.SetStateAction<string>> ) => {
  axios.interceptors.response.use( 
    (response) => response,
    (error : AxiosError) => {
      setOpen(true)
      setMessage(errorController({ 
        code: error?.response?.status as number, 
        message: error?.response?.statusText as string
      }));

      return Promise.reject(error)
    }
  );
}