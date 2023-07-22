import { AxiosResponse } from "axios";

export type loginServiceType = (email : string, password : string) => Promise<AxiosResponse>