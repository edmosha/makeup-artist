import { Typography } from 'app/components/typography';
import type { IFeedback } from './types';
import styles from './index.module.scss';

interface IFeedbackCardProps {
  feedback: IFeedback
}

export const FeedbackCard = ({ feedback }: IFeedbackCardProps) => {
  const { name, text, service, imgSrc } = feedback;

  return (
    <div className={ styles.card }>
      <img src={ imgSrc } alt={ name } className={ styles.avatar }/>
      <Typography variant='title' size='XXL' as='h2'>
        { service }
      </Typography>
      <Typography size='L' className={ styles.text }>
        { text }
      </Typography>
      <Typography variant='title' size='3XL' className={ styles.name }>
        { name }
      </Typography>
    </div>
  );
};
