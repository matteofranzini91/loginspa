import { FormsLayoutsDTO } from "src/core/models/form.model";
import EmailField from "src/components/commons/Form/FormsFields/EmailField";
import GeneralTextField from "src/components/commons/Form/FormsFields/GeneralTextField";
import DateField from "src/components/commons/Form/FormsFields/DateField";

export const editUserInfoFormLayout:FormsLayoutsDTO[] = [
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
    type: GeneralTextField,
    label: 'Empresa',
    name: 'company'
  },
  {
    type: GeneralTextField,
    label: 'Posición laboral',
    name: 'position'
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
    type: GeneralTextField,
    label: 'Móvil',
    name: 'phone'
  },
  {
    type: GeneralTextField,
    label: 'Linkedin',
    name: 'website'
  },
]