import { Gallery } from '~/pages/home/components/gallery/gallery';
import { Landing } from './components/landing';

export const HomePage = () => (
  <div className={'page_paddings'}>
    <Landing />
    <Gallery />
  </div>
);
