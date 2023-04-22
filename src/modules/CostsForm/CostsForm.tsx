import { observer } from 'mobx-react-lite';
import styles from './CostsForm.module.scss';
import { Formik } from 'formik';
import { CostsFormFields } from './CostsFormFields';
import { FormValues, useCostsFormFormik } from './useCostsFormFormik';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { costsStore } from '../../store/CostsStore';

export const CostsForm = observer(function Template() {
  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id && id !== 'new') {
      costsStore.fetchCost(id);
    }
  })

  const { initialValue, validate, handleSubmit } = useCostsFormFormik();

  return (
    <div className={styles.self}>
      <Formik<FormValues> initialValues={initialValue} validate={validate} onSubmit={handleSubmit} enableReinitialize>
        <CostsFormFields />
      </Formik>
    </div>
  )
});
