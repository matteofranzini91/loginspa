import { FormsLayoutsDTO } from "src/core/models/form.model";
import PasswordField from "src/components/commons/Form/FormsFields/PasswordField";
import EmailField from "src/components/commons/Form/FormsFields/EmailField";
import GeneralTextField from "src/components/commons/Form/FormsFields/GeneralTextField";
import DateField from "src/components/commons/Form/FormsFields/DateField";

export const registerFormLayout:FormsLayoutsDTO[] = [
  {
    type: GeneralTextField,
    label: 'Nombre',
    name: 'name'
  },
  {
    type: GeneralTextField,
    label: 'Apellidos',
    name: 'surname'
  },
  {
    type: DateField,
    label: 'Fecha nacimiento',
    name: 'born'
  },
  {
    type: EmailField,
    label: 'Email',
    name: 'email'
  },
  {
    type: PasswordField,
    label: 'Password',
    name: 'password'
  }
]