import { Home } from '@/pages';
import { RouterLayout } from '@/shared';

export const routes = [
  {
    element: <RouterLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
];
