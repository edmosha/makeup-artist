import clsx from 'clsx';
import { About } from '~/pages/home/components/about/about';
import { Feedback } from '~/components/feedback/feedback';
import { Gallery } from './components/gallery/gallery';
import { Services } from './components/services/services';
import { MoreServices } from './components/more-services/more-services';
import { Landing } from './components/landing/landing';
import styles from './index.module.scss';

export const HomePage = () => (
  <div className={clsx('page_paddings', styles.home)}>
    <Landing />
    <Gallery />
    <Services />
    <MoreServices />
    <About />
    <Feedback />
  </div>
);
