import { WeddingPage } from '~/pages/service/wedding-page';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'WeddingPage' },
    { name: 'WeddingPage', content: 'WeddingPage' },
  ];
}

export default function Wedding() {
  return <WeddingPage />;
}
