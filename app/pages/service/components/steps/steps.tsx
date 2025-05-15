import { Typography } from '~/components/typography';
import { StepCard } from './step-card/step-card';
import type { IStepCard } from './step-card/types';
import styles from './index.module.scss';

interface IStepsProps {
  items: IStepCard[]
  title: string
}

export const Steps = ({ items, title }: IStepsProps) => (
  <div className={styles.services} id='services'>
    <Typography size='5XL' variant='title' as='h2' className={'title_shadow'}>
      {title}
    </Typography>
    <div className={styles.cards}>
      {items.map((step, index) => (
        <StepCard key={index} card={step} />
      ))}
    </div>
  </div>
);
