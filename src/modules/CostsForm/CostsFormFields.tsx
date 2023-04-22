import { observer } from 'mobx-react-lite';
import { FormField } from '../../core/components/form/FormField';
import { InputText } from 'primereact/inputtext';
import { Form, useFormikContext } from 'formik';
import { FormValues } from './useCostsFormFormik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { categoriesStore } from '../../store/CategoriesStore';
import { useState } from 'react';
import { Category } from '../../core/types/costs';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';

export const CostsFormFields = observer(function CostsFormFields() {
  const navigate = useNavigate();

  const { values, errors, touched, setFieldValue, handleChange, handleBlur, resetForm } = useFormikContext<FormValues>();

  const [categories, setCategories] = useState<Category[]>(categoriesStore.categories);

  const handleCancel = () => {
    resetForm();
    navigate('/');
  }

  const handleSearch = ({ query }: AutoCompleteCompleteEvent) => {
    setCategories(categoriesStore.findCategories(query));
  }

  const handleChangeCost = ({ value }: InputNumberChangeEvent) => {
    setFieldValue('cost', value);
  }

  return (
    <Form>
      <FormField name="title" label="Title" error={touched.title ? errors.title : undefined}  maxWidth="500px">
        <InputText id="title" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
      </FormField>
      <FormField name="description" label="Description">
        <InputTextarea id="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
      </FormField>
      <FormField name="date" label="Date" maxWidth="200px">
        <Calendar showIcon dateFormat="dd.mm.yy" id="date" name="date" value={values.date} onChange={handleChange} onBlur={handleBlur} />
      </FormField>
      <FormField name="category" label="Category" maxWidth="500px">
        <AutoComplete
          id="category"
          name="category"
          field="title"
          value={values.category}
          suggestions={categories}
          completeMethod={handleSearch}
          onChange={handleChange}
          dropdown />
      </FormField>
      <FormField name="cost" label="Cost" error={touched.cost ? errors.cost : undefined} maxWidth="500px">
        <InputNumber
          id="cost"
          name="cost"
          value={values.cost}
          onChange={handleChangeCost}
          onBlur={handleBlur}
          minFractionDigits={0}
          maxFractionDigits={2}
        />
      </FormField>

      <div className="flex">
        <Button type="button" label="Cancel" className="p-button-secondary" onClick={handleCancel} />
        <Button type="submit" label="Submit" />
      </div>
    </Form>
  );
});
