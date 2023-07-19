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
    value: string;
    error: boolean;
  };
}

export type FormFieldsDTO = {
  value: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}