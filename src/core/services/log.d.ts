import { AxiosResponse } from "axios";

export type loginServiceType = (email : string, password : string) => Promise<AxiosResponse>

export type logoutServiceType = (email : string) => Promise<AxiosResponse>