import { observer } from 'mobx-react-lite';
import { templateStore } from './TemplateStore';
import { useEffect } from 'react';
import styles from './Template.module.scss';

export const Template = observer(function Template() {
  useEffect(() => {
    templateStore.fetchField();
  }, []);

  if (templateStore.loaders.fetchLoader || !templateStore.field) {
    return <>Loading...</>
  }

  return (
    <div className={styles.self}>
      Test{templateStore.field[0].id}
    </div>
  )
});
