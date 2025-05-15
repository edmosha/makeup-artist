// eslint-disable-next-line import/no-extraneous-dependencies
import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('wedding', 'routes/wedding.tsx'),
  route('base', 'routes/base.tsx'),
  route('profile', 'routes/profile.tsx'),
] satisfies RouteConfig;
