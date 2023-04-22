import { observer } from 'mobx-react-lite';
import styles from './Template.module.scss';

export const Template = observer(function Template() {
  return (
    <div className={styles.self}>
      Test
    </div>
  )
});
