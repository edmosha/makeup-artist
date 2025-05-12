import { Typography } from '~/components/typography';
import { ArrowRight, Link } from 'lucide-react';
import styles from './index.module.scss';
import type { IServiceCardListItem } from './types';

interface IServiceCardProps {
  card: IServiceCardListItem
}

export const ServiceCardListItem = ({ card }: IServiceCardProps) => {
  const { name, description, format } = card;

  return (
    <div className={ styles.card }>
      <div className={ styles.link }>
        <Link/>
      </div>
      <Typography variant='title' size='4XL' as='h2'>
        { name }
      </Typography>
      <Typography size='L' className={ styles.description }>
        { description }
      </Typography>
      <Typography variant='title' size='3XL' as='h2' className={ styles.price }>
        { format }
      </Typography>
      <div className={ styles.arrowBtn }>
        <ArrowRight/>
      </div>
    </div>
  );
};
