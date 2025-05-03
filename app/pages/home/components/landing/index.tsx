import { Chip } from '~/components/chip/chip';
import { Typography } from 'app/components/typography';
import { ArrowRight } from 'lucide-react';
import Bg from '~/assets/img/bg.png';
import styles from './index.module.scss';

export const Landing = () => (
  <div className={ styles.landing }>
    <img src={ Bg } alt='' className={styles.bg}/>
    <div className={styles.bg} />
    <div className={ styles.promo }>
      <Typography size='XXL'>
        Сделаю макияж,<br/> который поможет тебе&nbsp;
        <Typography className={ styles.text_accent } as='span' size='XXL'>
          подчеркнуть твою красоту
        </Typography>
        {/* чувствовать себя неотразимой */ }
        {/* покорять сердца */ }
        {/* забыть о фильтрах */ }
        {/* сиять естественно */ }
      </Typography>
      <div className={ styles.chips }>
        <Chip text='Утром'/>
        <Chip text='Днем'/>
        <Chip text='Вечером'/>
        <Chip text='Всегда'/>
      </div>
    </div>
    <button className={ styles.project }>
      <Typography size='XXL'>Обсудить проект</Typography>
      <span className={ styles.project_icon }>
        <ArrowRight/>
      </span>
    </button>
  </div>
);
