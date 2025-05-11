import { Typography } from 'app/components/typography';
import type { IStepCard } from './types';
import styles from './index.module.scss';

interface IStepCardProps {
  card: IStepCard
}

export const StepCard = ({ card }: IStepCardProps) => {
  const { step, title, description, descriptionItems } = card;

  return (
    <div className={ styles.card }>
      <div className={ styles.badge }>
        <Typography>
          { step }
        </Typography>
      </div>
      <Typography variant='title' size='XXL' as='h2'>
        { title }
      </Typography>
      <div className={styles.description_container}>
        {description && (
          <Typography size='L' className={ styles.description }>
            { description }
          </Typography>
        )}
        {descriptionItems && (
          <ul className={ styles.description_list }>
            { descriptionItems.map((item, i) => (
              <li key={ i }>
                <Typography size='L'>
                  { item }
                </Typography>
              </li>
            )) }
          </ul>
        ) }
      </div>
    </div>
  );
};
