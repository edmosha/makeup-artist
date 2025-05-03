import { Typography } from 'app/components/typography';
import type { IServiceCard } from '~/components/service-card/types';
import Work7 from '~/assets/img/work5.jpg';
import { ServiceCard } from '~/components/service-card/service-card';
import styles from './index.module.scss';

const services: IServiceCard[] = [
  {
    name: 'Ежедневный макияж',
    description: 'Легкий, естественный макияж, который подчеркивает твою красоту без перегруза. Идеален для работы, прогулок и повседневных дел.',
    price: 'от 1 500 ₽',
    imgSrc: Work7,
  },
  {
    name: 'Свадебный макияж',
    description: 'Безупречный макияж, который останется идеальным весь день и будет выглядеть потрясающе на фото и вживую.  А бонусом - мы проведем репетицию накануне.',
    price: 'от 4 500 ₽ (с пробным сеансом) ',
    imgSrc: Work7,
  },
  {
    name: 'Вечерний макияж',
    description: 'Яркий, выразительный макияж с акцентами — для вечеринок, ресторанов и особых случаев.  Эффектные переливы и стойкость до 12 часов. ',
    price: 'от 3 000 ₽',
    imgSrc: Work7,
  },
  {
    name: 'Съемочный макияж',
    description: 'Макияж, адаптированный под камеру — с усиленными контурами и безупречной детализацией.',
    price: 'от 5 000 ₽',
    imgSrc: Work7,
  },
];

export const Services = () => (
  <div className={styles.services}>
    <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
      Услуги и цены
    </Typography>
    <div className={styles.cards}>
      {services.map((card, index) => (
        <ServiceCard key={index} card={card} />
      ))}
    </div>
  </div>
);
