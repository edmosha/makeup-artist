import { Typography } from 'app/components/typography';
import type { IServiceCard } from './types';
import styles from './index.module.scss';

interface IServiceCardProps {
  card: IServiceCard
}

export const ServiceCard = ({ card }: IServiceCardProps) => {
  const { name, description, price, imgSrc } = card;

  return (
    <div className={ styles.card }>
      <img src={ imgSrc } alt={ name } className={ styles.image }/>
      <div className={ styles.image }/>
      <button className={ styles.button }>Записаться</button>
      <Typography variant='title' size='XXL' as='h2'>
        { name }
      </Typography>
      <Typography size='L' className={ styles.description }>
        { description }
      </Typography>
      <Typography variant='title' size='3XL' className={ styles.price }>
        { price }
      </Typography>
    </div>
  );
};
