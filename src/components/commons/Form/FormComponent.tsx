import { useState, useCallback, createElement } from 'react';
import { FormComponentPropsDTO, FormComponentStateDTO } from 'src/core/models/form.model';
import SubmitButton from '../Buttons/SubmitButton';

const FormComponent = ({
  formLayout,
  handleSubmit,
  submitButtonText,
  loadingSubmitButton,
  children = null
}: FormComponentPropsDTO) => {
  const [formState, setFormState] = useState<FormComponentStateDTO>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((currentFormValues) => ({
        ...currentFormValues,
        [e.target.name]: {
          value: e.target.value,
          error: false
        }
      }));
    },
    [formState]
  );

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(formState);
  };

  return (
    <form autoComplete="off" onSubmit={onFormSubmit} className="login-form">
      {formLayout.map((item) => (
        <div key={item.name}>
          {createElement(item.type, {
            value: formState[item.name]?.value ? formState[item.name].value : '',
            label: item.label,
            name: item.name,
            onChange: handleChange
          })}
        </div>
      ))}
      {children}
      <SubmitButton text={submitButtonText} loading={loadingSubmitButton} />
    </form>
  );
};

export default FormComponent;
