import { createHashRouter } from 'react-router-dom';
import { Layout } from './core/components/layouts/Layout/Layout';
import { ErrorBoundary } from './core/components/errors/ErrorBoundary/ErrorBoundary';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { CostsList } = await import('./modules/CostsList/CostsList');
          return {
            Component: CostsList,
          }
        }
      },
      {
        path: '/costs/:id',
        lazy: async () => {
          const { CostsForm } = await import('./modules/CostsForm/CostsForm');
          return {
            Component: CostsForm,
          }
        }
      },
    ]
  },
]);
