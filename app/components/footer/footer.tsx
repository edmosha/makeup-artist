import { Typography } from '~/components/typography';
import { ArrowRight } from 'lucide-react';
import { SignForm } from '~/components/sign-form/sign-form';
import { useState } from 'react';
import styles from './index.module.scss';

export const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer className={ styles.footer } id='contacts'>
      <div className={ styles.container }>
        <Typography
          size='6XL'
          variant='title'
          as='h2'
          className='title_shadow'
        >
          Давай сделаем тебе идеальный макияж?
        </Typography>
        <button className={ styles.button } onClick={handleOpen}>
          <Typography size='L' variant='body'>
            Записаться
          </Typography>
          <ArrowRight/>
        </button>
      </div>
      <div className={ styles.social_container }>
        <div className={ styles.social }>
          <Typography size='XXL' variant='body'>ВК</Typography>
        </div>
        <div className={ styles.social }>
          <Typography size='XXL' variant='body'>ТГ</Typography>
        </div>
        <div className={ styles.social }>
          <Typography size='XXL' variant='body'>БЛОГ</Typography>
        </div>
      </div>
      <div className={ styles.rights }>
        <Typography size='M' variant='body' className={ styles.rights_text }>
          2025, Все права защищены
        </Typography>
        <Typography size='M' variant='body' className={ styles.rights_text }>
          Политика обработки персональных данных
        </Typography>
      </div>

      <SignForm open={ open } onClose={ handleClose }/>
    </footer>
  );
};
