import SignUp from './screens/SignUp';
import Login from './screens/Login';
import UpdatePassword from './screens/UpdatePassword';

export enum PublicRoutes {
  SIGN_UP = '/signup',
  LOGIN = '/login',
  UPDATE_PASSWORD = '/reset_password',
}

const publicRoutes: {
  path: string;
  Component: React.FunctionComponent;
}[] = [
  {
    path: PublicRoutes.SIGN_UP,
    Component: SignUp,
  },
  {
    path: PublicRoutes.LOGIN,
    Component: Login,
  },
  {
    path: PublicRoutes.UPDATE_PASSWORD,
    Component: UpdatePassword,
  }
];

export default publicRoutes;
