import { ServicePage } from '~/pages/service/service-page';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'ServicePage' },
    { name: 'ServicePage', content: 'ServicePage' },
  ];
}

export default function Service() {
  return <ServicePage />;
}
