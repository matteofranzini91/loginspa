import { TypeWithKey } from "src/core/models/basic.model";
import { ErrorDTO } from "src/core/models/errors.model";

export const errorController = (error:ErrorDTO) => {
  const errorsValues: TypeWithKey<string> = {
    'INVALID_PASSWORD': 'La contraseña insertada no es válida.',
    'INVALID_USER': 'El email insertado no es válido.'
  }

  return errorsValues[error.message]
}