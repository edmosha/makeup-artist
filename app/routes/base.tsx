import { BasePage } from '~/pages/service/base-page';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BasePage' },
    { name: 'BasePage', content: 'BasePage' },
  ];
}

export default function Service() {
  return <BasePage />;
}
