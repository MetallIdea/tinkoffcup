import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './core/components/layouts/Layout/Layout';
import { ErrorBoundary } from './core/components/errors/ErrorBoundary/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/module',
        lazy: async () => {
          const { Template } = await import('./modules/_Template/Template');
          return {
            Component: Template,
          }
        }
      },
    ]
  },
]);
