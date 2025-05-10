import { Typography } from 'app/components/typography';
import { ServiceCardListItem } from '~/components/service-card-list-item/service-card-list-item';
import type { IServiceCardListItem } from '~/components/service-card-list-item/types';
import styles from './index.module.scss';

const moreServices: IServiceCardListItem[] = [
  {
    name: 'Выезд на площадку',
    description: 'Приеду в любое место и сделаю тебе лучший макияж',
    format: 'Оффлайн',
  },
  {
    name: 'Это база',
    description: 'Курс об основах макияжа, который идеален для новичков',
    format: 'Онлайн',
  },
  {
    name: 'Взгляд кошки',
    description: 'Smokey eyes, стрелки, в общем всё, что может подчеркнуть взгляд',
    format: 'Онлайн',
  },
  {
    name: 'Две сестры',
    description: 'Всё о бровях и том, как найти и уложить свою форму',
    format: 'Онлайн',
  },
];

export const MoreServices = () => (
  <div className={styles.services}>
    <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
      Еще услуги
    </Typography>
    <div className={styles.cards}>
      {moreServices.map((card, index) => (
        <ServiceCardListItem card={card} key={index} />
      ))}
    </div>
  </div>
);
