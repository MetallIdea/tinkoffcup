import { FormikErrors, FormikHelpers } from 'formik';
import { costsStore } from '../../store/CostsStore';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../core/types/costs';
import { categoriesStore } from '../../store/CategoriesStore';

export type FormValues = {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: Category | null;
  cost: number;
}

export function useCostsFormFormik() {
  const navigate = useNavigate();

  const initialValue: FormValues = {
    id: costsStore.cost?.id ?? '',
    title: costsStore.cost?.title ?? '',
    description: costsStore.cost?.description ?? '',
    date: costsStore.cost?.date ?? new Date(),
    category: costsStore.cost?.category ?? null,
    cost: costsStore.cost?.cost ?? 0,
  }

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.date) {
      errors.date = 'Date is required';
    }

    if (!values.cost) {
      errors.cost = 'Cost is required';
    } else if (values.cost > 1000000000000) {
      errors.cost = 'Cost cannot be more 1000000000000';
    } else if (values.cost <= 0) {
      errors.cost = 'Cost cannot be less or equal zero';
    }


    return errors;
  }

  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    values.category = categoriesStore.ensureCategory(values.category);

    if (costsStore.cost) {
      costsStore.updateCost(values);
    } else {
      costsStore.createCost(values);
    }

    setSubmitting(false);

    resetForm();

    navigate('/');
  }

  return {
    initialValue,
    validate,
    handleSubmit,
  }
}
