import { observer } from 'mobx-react-lite';
import { useRouteError } from 'react-router-dom';
import { RouteError } from '../../../types/errors';

import styles from './ErrorBoundary.module.scss';

export const ErrorBoundary = observer(function ErrorBoundary() {
  let error = useRouteError() as RouteError;

  return <div className={styles.self}>
    <div className={styles.title}>Error</div>
    <div className={styles.text}>{error?.statusText ?? (error?.error?.message ?? error?.message)}</div>
  </div>;
});
