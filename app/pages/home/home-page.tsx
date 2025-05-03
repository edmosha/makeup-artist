import { Gallery } from '~/pages/home/components/gallery/gallery';
import { Services } from '~/pages/home/components/services/services';
import { MoreServices } from '~/pages/home/components/more-services/more-services';
import clsx from 'clsx';
import { Landing } from './components/landing';
import styles from './index.module.scss';

export const HomePage = () => (
  <div className={clsx('page_paddings', styles.home)}>
    <Landing />
    <Gallery />
    <Services />
    <MoreServices />
  </div>
);
