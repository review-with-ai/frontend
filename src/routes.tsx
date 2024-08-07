import { Home, Login, Main, Signup, Setting, Trash, NewNote } from '@/pages';
import { PATH, RouterLayout } from '@/shared';

export const routes = [
  {
    element: <RouterLayout />,
    children: [
      { path: PATH.MAIN, element: <Main /> },
      { path: PATH.LOG_IN, element: <Login /> },
      { path: PATH.SIGN_UP, element: <Signup /> },
      // { path: PATH.OAUTH_KAKAO, element: <AuthKakao /> },
      // { path: PATH.OAUTH_NAVER, element: <AuthNaver /> },
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.NOTE, element: <NewNote /> },
      { path: PATH.TRASH, element: <Trash /> },
      { path: PATH.SETTING, element: <Setting /> },
      { path: PATH.ACCOUNT, element: <Setting /> },
    ],
  },
];
