import { Carousel } from '~/components/carousel/carousel';
import Photo1 from '~/assets/img/wedding/wedding1.jpg';
import Photo2 from '~/assets/img/wedding/wedding2.jpg';
import Photo3 from '~/assets/img/wedding/wedding3.jpg';
import Photo4 from '~/assets/img/wedding/wedding4.jpg';
import Photo5 from '~/assets/img/wedding/wedding5.jpg';
import Photo6 from '~/assets/img/wedding/wedding6.jpg';
import Photo7 from '~/assets/img/wedding/wedding7.jpg';
import Photo8 from '~/assets/img/wedding/wedding8.jpg';
import { Typography } from '~/components/typography';
import styles from './index.module.scss';

export const Gallery = () => (
  <div className={styles.gallery}>
    <Typography size='5XL' variant='title' as='h2' className={'title_shadow'}>
      Галерея работ
    </Typography>
    <Carousel maxItemsDesktop={3}>
      <div className={ styles.photo }>
        <img src={ Photo1 } alt='photo1' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo2 } alt='photo2' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo3 } alt='photo3' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo4 } alt='photo4' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo5 } alt='photo5' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo6 } alt='photo6' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo7 } alt='photo7' draggable={false}/>
      </div>
      <div className={ styles.photo }>
        <img src={ Photo8 } alt='photo8' draggable={false}/>
      </div>
    </Carousel>
  </div>
);
