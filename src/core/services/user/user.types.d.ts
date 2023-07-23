import { AxiosResponse } from "axios";
import { FormComponentStateDTO } from "src/core/models/form.model";

export type ResgisterUserServiceType = (formValues : FormComponentStateDTO) => Promise<AxiosResponse>

export type GetUserServiceType = (userId : number) => Promise<AxiosResponse>

export type editUserServiceType = (formValues : FormComponentStateDTO) => Promise<AxiosResponse>