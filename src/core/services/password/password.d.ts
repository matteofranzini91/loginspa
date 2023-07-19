import { AxiosResponse } from "axios";

export type resetPasswordServiceType = (email : string) => Promise<AxiosResponse>