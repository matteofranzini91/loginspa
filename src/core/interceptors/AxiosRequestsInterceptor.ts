import axios from "axios";

export const AxiosRequestsInterceptor = () => {
  axios.interceptors.request.use( 
    (request) => {
      const sessionToken = sessionStorage.getItem('token');

      if(sessionToken){
        request.headers.set('Authorization', sessionToken);
        return request;
      } 
      else
        return request;
    }
  );
}