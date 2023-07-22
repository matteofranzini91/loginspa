//import { useCallback, useState } from 'react';
import FormComponent from './commons/Form/FormComponent';
import { FormComponentStateDTO } from 'src/core/models/form.model';
import { editUserInfoFormLayout } from 'src/layout/forms-layouts/edit-user-info-form.layout';
//import { useNotification } from 'src/providers/notifications/NotificationsProvider';

const EditUserInfoForm = () => {
  //const notification = useNotification();
  //const [loadingFormButton, setLoadingFormButton] = useState(false);

  const handleFormSubmit = (formValues: FormComponentStateDTO) => console.log(formValues);

  return (
    <>
      <FormComponent
        formLayout={editUserInfoFormLayout}
        submitButtonText="Registrarse"
        loadingSubmitButton={false}
        handleSubmit={handleFormSubmit}></FormComponent>
    </>
  );
};

export default EditUserInfoForm;
