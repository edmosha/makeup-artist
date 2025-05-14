import { Chip } from '~/components/chip/chip';
import Typewriter from 'typewriter-effect';
import Bg from '~/assets/img/bg2.png';
import { ButtonWithArrow } from '~/components/button-with-arrow/button-with-arrow';
import { SignForm } from '~/components/sign-form/sign-form';
import { useState } from 'react';
import { Typography } from '~/components/typography';
import styles from './index.module.scss';

const phrases = [
  'подчеркнуть твою красоту',
  'чувствовать себя неотразимой',
  'покорять сердца',
  'забыть о фильтрах',
  'сиять естественно',
];

export const Landing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={ styles.landing }>
      <img src={ Bg } alt='' className={ styles.bg }/>
      <div className={ styles.bg }/>
      <div className={ styles.promo }>
        <Typography size='4XL'>
          Сделаю макияж,<br/> который поможет тебе&nbsp;
          <Typography className={ styles.text_accent } as='span' size='4XL'>
            <Typewriter
              options={ {
                strings: phrases,
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              } }
            />
          </Typography>
        </Typography>
        <div className={ styles.chips }>
          <Chip text='Утром'/>
          <Chip text='Днем'/>
          <Chip text='Вечером'/>
          <Chip text='Всегда'/>
        </div>
      </div>
      <ButtonWithArrow text='Записаться' onClick={handleOpen} />

      <SignForm open={open} onClose={handleClose}/>
    </div>
  );
};
