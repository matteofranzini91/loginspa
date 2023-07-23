import { useState } from 'react';
import FormComponent from './commons/Form/FormComponent';
import { FormComponentStateDTO } from 'src/core/models/form.model';
import { editUserInfoFormLayout } from 'src/layout/forms-layouts/edit-user-info-form.layout';
import { useNotification } from 'src/providers/notifications/NotificationsProvider';
import { editUserService } from 'src/core/services/user/user.service';
import {
  adaptFormValuesToUserInfo,
  adaptUserInfoToFormValues
} from 'src/core/adapters/edit-user-info.adapter';
import { useAppSelector } from 'src/redux/hooks/redux-hooks';
import { getUserState } from 'src/redux/store';
import { useAppDispatch } from 'src/redux/hooks/redux-hooks';
import { setUser } from 'src/redux/slice/user-slice/user-slice';

type EditUserFormInfoDTO = {
  setShowEditUserInfoForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditUserInfoForm = ({ setShowEditUserInfoForm }: EditUserFormInfoDTO) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserState);
  const notification = useNotification();
  const [loadingFormButton, setLoadingFormButton] = useState(false);

  const handleFormSubmit = (formValues: FormComponentStateDTO) => {
    setLoadingFormButton(true);
    editUserService(formValues)
      .then(() => {
        notification?.setNotification({
          open: true,
          severity: 'success',
          message: 'Usuario editado con éxito'
        });
        setLoadingFormButton(false);
        dispatch(setUser(adaptFormValuesToUserInfo(formValues)));
        setShowEditUserInfoForm(false);
      })
      .catch(() => setLoadingFormButton(false));
  };

  return (
    <FormComponent
      formLayout={editUserInfoFormLayout}
      submitButtonText="Guardar cambios"
      loadingSubmitButton={loadingFormButton}
      handleSubmit={handleFormSubmit}
      defaultValues={adaptUserInfoToFormValues(user)}></FormComponent>
  );
};

export default EditUserInfoForm;
