import { Home, Login, Signup } from '@/pages';
import { PATH, RouterLayout } from '@/shared';

export const routes = [
  {
    element: <RouterLayout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.LOG_IN, element: <Login /> },
      { path: PATH.SIGN_UP, element: <Signup /> },
    ],
  },
];
