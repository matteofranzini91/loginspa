import { UserInitialStateDTO, UserStateDTO } from "src/redux/slice/user-slice/types";
import { FormComponentStateDTO } from "../models/form.model";
import dayjs, { Dayjs } from "dayjs";

/**
 * 
 * @param user 
 * born: {value: M, error: false}
  company: {value: 'NTT Data', error: false}
  email: {value: 'matteo@gmail.com', error: false}
  name: {value: 'Matteo', error: false}
  phone: {value: '722720098', error: false}
  position: {value: 'SENIOR', error: false}
  surname: {value: 'Franzini', error: false}
  website: {value: 'hola', error: false}
 * @returns 
 */

export const adaptUserInfoToFormValues = (user:UserInitialStateDTO) : FormComponentStateDTO => ({
  born: {
    value: user.birthday,
    error: false,
  },
  company: {
    value: user.company.name,
    error: false,
  },
  email: {
    value: user.email,
    error: false
  },
  name: {
    value: user.name,
    error: false
  },
  phone: {
    value: user.phone,
    error: false
  },
  position: {
    value: user.company.position,
    error: false
  },
  surname: {
    value: user.surname,
    error: false
  },
  website: {
    value: user.website,
    error: false
  },
});

export const adaptFormValuesToUserInfo = (formValues:FormComponentStateDTO) : UserStateDTO => ({
  name: formValues.name.value as string,
  surname: formValues.surname.value as string,
  birthday: dayjs(formValues.born.value as Dayjs).format('DD/MM/YYYY'),
  email: formValues.email.value as string,
  phone: formValues.phone.value as string,
  website: formValues.website.value as string,
  company: {
    name: formValues.company.value as string,
    position: formValues.position.value as string,
  },
});