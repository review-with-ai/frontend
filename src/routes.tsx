import { AuthKakao, AuthNaver, Home, Login, Main, Signup } from '@/pages';
import { User } from '@/pages/user';
import { PATH, RouterLayout } from '@/shared';

export const routes = [
  {
    element: <RouterLayout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.LOG_IN, element: <Login /> },
      { path: PATH.SIGN_UP, element: <Signup /> },
      { path: PATH.OAUTH_KAKAO, element: <AuthKakao /> },
      { path: PATH.OAUTH_NAVER, element: <AuthNaver /> },
      { path: PATH.MAIN, element: <Main /> },
      { path: PATH.ACCOUNT, element: <User /> },
      { path: PATH.SETTING, element: <User /> },
    ],
  },
];
