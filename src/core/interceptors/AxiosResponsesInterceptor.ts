import axios, { AxiosError } from "axios";
import { errorController } from "src/controllers/errors.controller";
import { NotificationDTO } from "../models/basic.model";

export const AxiosResponsesInterceptor = (setNotification: React.Dispatch<React.SetStateAction<NotificationDTO>>) => {
  axios.interceptors.response.use( 
    (response) => response,
    (error : AxiosError) => {
      setNotification({
        open: true,
        severity: 'error',
        message: errorController({ 
          code: error?.response?.status as number, 
          message: error?.response?.statusText as string
        })
      });

      return Promise.reject(error)
    }
  );
}