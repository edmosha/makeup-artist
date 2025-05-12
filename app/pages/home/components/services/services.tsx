import AllDays from '~/assets/img/service_all_days.jpg';
import Night from '~/assets/img/service_night.jpg';
import Wedding from '~/assets/img/service_wedding.jpg';
import PhotoSession from '~/assets/img/service_photo_session.jpg';
import { Typography } from '~/components/typography';
import type { IServiceCard } from './service-card/types';
import { ServiceCard } from './service-card/service-card';
import styles from './index.module.scss';

const services: IServiceCard[] = [
  {
    name: 'Ежедневный макияж',
    description: 'Легкий, естественный макияж, который подчеркивает твою красоту без перегруза. Идеален для работы, прогулок и повседневных дел.',
    price: 'от 1 500 ₽',
    imgSrc: AllDays,
    link: '/service',
  },
  {
    name: 'Свадебный макияж',
    description: 'Безупречный макияж, который останется идеальным весь день и будет выглядеть потрясающе на фото и вживую.  А бонусом - мы проведем репетицию накануне.',
    price: 'от 4 500 ₽ (с пробным сеансом) ',
    imgSrc: Wedding,
    link: '/service',
  },
  {
    name: 'Вечерний макияж',
    description: 'Яркий, выразительный макияж с акцентами — для вечеринок, ресторанов и особых случаев.  Эффектные переливы и стойкость до 12 часов. ',
    price: 'от 3 000 ₽',
    imgSrc: Night,
    link: '/service',
  },
  {
    name: 'Съемочный макияж',
    description: 'Макияж, адаптированный под камеру — с усиленными контурами и безупречной детализацией.',
    price: 'от 5 000 ₽',
    imgSrc: PhotoSession,
    link: '/service',
  },
];

export const Services = () => (
  <div className={styles.services} id='services'>
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
