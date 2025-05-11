import Work1 from '~/assets/img/work1.jpg';
import Work2 from '~/assets/img/work2.jpg';
import Work3 from '~/assets/img/work3.jpg';
import Work4 from '~/assets/img/work4.jpg';
import Work5 from '~/assets/img/work5.jpg';
import Work6 from '~/assets/img/work6.jpg';
import Work7 from '~/assets/img/work7.jpg';
import Work8 from '~/assets/img/work8.jpg';
import Work9 from '~/assets/img/work9.jpg';
import Work10 from '~/assets/img/work10_cut.jpg';
import { Typography } from 'app/components/typography';
import styles from './index.module.scss';

export const Gallery = () => (
  <div className={styles.container} id='works'>
    <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
      Работы
    </Typography>
    <div className={ styles.gallery }>
      <img src={ Work1 } alt={ 'work 1' } className={ styles.work_1 }/>
      <img src={ Work2 } alt={ 'work 2' } className={ styles.work_2 }/>
      <img src={ Work3 } alt={ 'work 3' } className={ styles.work_3 }/>
      <img src={ Work4 } alt={ 'work 4' } className={ styles.work_4 }/>
      <img src={ Work5 } alt={ 'work 5' } className={ styles.work_5 }/>
      <img src={ Work6 } alt={ 'work 6' } className={ styles.work_6 }/>
      <img src={ Work7 } alt={ 'work 7' } className={ styles.work_7 }/>
      <img src={ Work8 } alt={ 'work 8' } className={ styles.work_8 }/>
      <img src={ Work9 } alt={ 'work 9' } className={ styles.work_9 }/>
      <img src={ Work10 } alt={ 'work 10' } className={ styles.work_10 }/>
    </div>
  </div>
);
