import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './core/components/layouts/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/template',
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
