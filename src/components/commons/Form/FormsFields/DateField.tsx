import { memo, useState } from 'react';
import { FormFieldsDTO, DateFieldDTO } from 'src/core/models/form.model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

const DateField = ({ value, label, name, onChange }: FormFieldsDTO) => {
  const [date, setDate] = useState<string | null>(
    value.length > 0 ? dayjs(value).format('DD/MM/YYYY') : null
  );

  const onDateChange = (newValue: Dayjs | DateFieldDTO | null) => {
    setDate(newValue?.toString() as string);
    onChange({
      target: {
        name,
        value: newValue as string | null
      }
    });
  };

  return (
    <div className="date-field-container">
      <DatePicker label={label} value={dayjs(date)} onChange={onDateChange} />
    </div>
  );
};

export default memo(
  DateField,
  (prevProps: FormFieldsDTO, nextProps: FormFieldsDTO) => prevProps.value === nextProps.value
);
