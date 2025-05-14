import { Typography } from '~/components/typography';
import { ProfileServiceCard } from '~/pages/profile/components/profile-service-card/profile-service-card';
import type { IProfileServiceCard } from '../profile-service-card/types';
import styles from './index.module.scss';

const futureServices: IProfileServiceCard[] = [
  {
    status: 'В обработке',
    service: 'Свадебный макияж',
    description: 'Хочу красивый макияж в нежных тонах, который позволит мне быть лучшей невестой на свете',
    address: 'ул.Шотмана, д.9, к.1',
    date: '20.08.2025',
  },
];

const pastServices: IProfileServiceCard[] = [
  {
    status: 'Завершен',
    service: 'Вечерний макияж',
    description: 'На месте решим, это будут синие или фиолетовые смоки, а также супер длинные стрелки',
    address: 'Пионерская улица, 45',
    date: '14.05.2025',
  },
];

export const Services = () => (
  <div className={ styles.services } id='services'>
    <div className={ styles.cards }>
      { futureServices.map((card, index) => (
        <ProfileServiceCard key={ index } card={ card }/>
      )) }
    </div>
    <Typography size='5XL' className={styles.text}>
      Прошедшие сеансы
    </Typography>
    <div className={ styles.cards }>
      { pastServices.map((card, index) => (
        <ProfileServiceCard key={ index } card={ card } darkTheme withLink />
      )) }
    </div>
  </div>
);
