import { Typography } from 'app/components/typography';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';
import type { IServiceCardListItem } from './types';

interface IServiceCardProps {
  card: IServiceCardListItem
}

export const ServiceCardListItem = ({ card }: IServiceCardProps) => {
  const { name, description, price } = card;

  return (
    <div className={ styles.card }>
      <Typography variant='title' size='4XL' as='h2'>
        { name }
      </Typography>
      <Typography size='L' className={ styles.description }>
        { description }
      </Typography>
      <Typography variant='title' size='3XL' as='h2' className={styles.price}>
        { price }
      </Typography>
      <button className={styles.button}>
        <Typography variant='title' size='XXL' as='h2'>
          Обсудить
        </Typography>
        <span className={styles.arrow}>
          <ArrowRight />
        </span>
      </button>
    </div>
  );
};
