import { observer } from 'mobx-react-lite';
import { FormField } from '../../core/components/form/FormField';
import { InputText } from 'primereact/inputtext';
import { Form, useFormikContext } from 'formik';
import { FormValues } from './useCostsFormFormik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const CostsFormFields = observer(function CostsFormFields() {
  const navigate = useNavigate();

  const { values, errors, handleChange, handleBlur, resetForm } = useFormikContext<FormValues>();

  const handleCancel = () => {
    resetForm();
    navigate('/costs');
  }

  return (
    <Form>
      <FormField name="title" label="Title" helpText={errors.title}>
        <InputText id="title" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
      </FormField>
      <FormField name="description" label="Description">
        <InputTextarea id="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
      </FormField>

      <div className="flex">
        <Button type="button" label="Cancel" className="p-button-secondary" onClick={handleCancel} />
        <Button type="submit" label="Submit" />
      </div>
    </Form>
  );
});
