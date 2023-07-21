import { Dayjs } from "dayjs";

export type FormsLayoutsDTO = {
  type: JSX.ElementType;
  label: string;
  name: string;
}

export type FormComponentPropsDTO = {
  formLayout: FormsLayoutsDTO[];
  submitButtonText: string;
  loadingSubmitButton: boolean;
  handleSubmit: (value: FormComponentStateDTO) => void
  children?: JSX.Element | null;
}

export type FormComponentStateDTO = {
  [key: string]: {
    value: string | object;
    error: boolean;
  };
}

export type DateFieldDTO = {
  target: {
    name: string,
    value: Dayjs | null
  }
}

export type FormFieldsDTO = {
  value: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | Dayjs> | DateFieldDTO) => void;
}