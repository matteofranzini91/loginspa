import { memo, useState } from 'react';
import { FormFieldsDTO, DateFieldDTO } from 'src/core/models/form.model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

const DateField = ({ value, label, name, onChange }: FormFieldsDTO) => {
  const [date, setDate] = useState<Dayjs | null>(value.length > 0 ? dayjs(value) : null);

  const onDateChange = (newValue: Dayjs | DateFieldDTO | null) => {
    setDate(newValue as Dayjs | null);
    onChange({
      target: {
        name,
        value: newValue as Dayjs | null
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
