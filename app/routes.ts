// eslint-disable-next-line import/no-extraneous-dependencies
import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('service', 'routes/service.tsx'),
] satisfies RouteConfig;
