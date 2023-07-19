import PasswordField from "src/components/commons/Form/FormsFields/PasswordField";
import EmailField from "src/components/commons/Form/FormsFields/EmailField";
import { FormsLayoutsDTO } from "src/core/models/form.model";

export const loginFormLayout:FormsLayoutsDTO[] = [
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