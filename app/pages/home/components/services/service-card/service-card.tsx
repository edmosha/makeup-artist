import { Typography } from '~/components/typography';
import { useState } from 'react';
import { SignForm } from '~/components/sign-form/sign-form';
import type { IServiceCard } from './types';
import styles from './index.module.scss';

interface IServiceCardProps {
  card: IServiceCard
}

export const ServiceCard = ({ card }: IServiceCardProps) => {
  const { name, description, price, imgSrc, link } = card;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <a className={ styles.card } href={ link }>
      <img src={ imgSrc } alt={ name } className={ styles.image }/>
      <div className={ styles.image }/>
      <button className={ styles.button } onClick={handleOpen}>
        Записаться
      </button>
      <Typography variant='title' size='XXL' as='h2'>
        { name }
      </Typography>
      <Typography size='L' className={ styles.description }>
        { description }
      </Typography>
      <Typography variant='title' size='3XL' className={ styles.price }>
        { price }
      </Typography>

      <SignForm open={open} onClose={handleClose}/>
    </a>
  );
};
