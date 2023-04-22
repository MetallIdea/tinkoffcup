import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export const Layout = observer(function Layout() {
  return (
    <div className={styles.self}>
      <div>Your costs</div>
      <Outlet />
    </div>
  )
});
