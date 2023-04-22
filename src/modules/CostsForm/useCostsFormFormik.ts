
import { FormikErrors, FormikHelpers } from 'formik';
import { costsStore } from '../../store/CostsStore';
import { Category } from '../../core/types/costs';
import { useNavigate } from 'react-router-dom';

export type FormValues = {
  id: string;
  title: string;
  description: string;
  categories: Category[];
}

export function useCostsFormFormik() {
  const navigate = useNavigate();

  const initialValue: FormValues = {
    id: costsStore.cost?.id ?? '',
    title: costsStore.cost?.title ?? '',
    description: costsStore.cost?.description ?? '',
    categories: costsStore.cost?.categories ?? [],
  }

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    return errors;
  }

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    if (costsStore.cost) {
      costsStore.updateCost(values);
    } else {
      costsStore.createCost(values);
    }

    setSubmitting(false);

    navigate('/costs');
  }

  return {
    initialValue,
    validate,
    handleSubmit,
  }
}
