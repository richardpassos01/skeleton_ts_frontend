import SignUp from './screens/SignUp';
import Login from './screens/Login';

export enum PublicRoutes {
  SIGN_UP = '/signup',
  LOGIN = '/login',
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
  }
];

export default publicRoutes;
