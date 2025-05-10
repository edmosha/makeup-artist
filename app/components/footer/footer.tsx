import { Typography } from '~/components/typography';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={ styles.container }>
      <Typography
        size='6XL'
        variant='title'
        as='h2'
        className='title_shadow_grey'
      >
        Давай сделаем тебе идеальный макияж?
      </Typography>
      <button className={ styles.button }>
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
    <div className={styles.rights}>
      <Typography size='M' variant='body' className={styles.rights_text}>
        2025, Все права защищены
      </Typography>
      <Typography size='M' variant='body' className={styles.rights_text}>
        Политика обработки персональных данных
      </Typography>
    </div>
  </footer>
);
