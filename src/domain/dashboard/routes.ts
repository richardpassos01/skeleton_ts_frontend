import Dashboard from './screens/Dashboard';

export enum DashboardRoutes {
  DASHBOARD = '/dashboard',
}

const dashboardRoutes: {
  path: string;
  Component: React.FunctionComponent;
}[] = [
  {
    path: DashboardRoutes.DASHBOARD,
    Component: Dashboard,
  }
];

export default dashboardRoutes;
