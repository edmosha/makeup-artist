import { Typography } from 'app/components/typography';
import { StepCard } from '~/pages/service/components/step-card/step-card';
import { steps } from './constants';
import styles from './index.module.scss';

export const Services = () => (
  <div className={styles.services} id='services'>
    <Typography size='5XL' variant='title' as='h2' className={'title_shadow'}>
      Что входит в услугу свадебного макияжа?
    </Typography>
    <div className={styles.cards}>
      {steps.map((step, index) => (
        <StepCard key={index} card={step} />
      ))}
    </div>

  </div>
);
