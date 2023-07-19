import EmailField from "src/components/commons/Form/FormsFields/EmailField";
import { FormsLayoutsDTO } from "src/core/models/form.model";

export const newPasswordFormLayout:FormsLayoutsDTO[] = [
  {
    type: EmailField,
    label: 'Email',
    name: 'email'
  },
]