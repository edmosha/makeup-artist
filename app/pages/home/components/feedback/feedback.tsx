import { Typography } from '~/components/typography';
import { Carousel } from '~/components/carousel/carousel';
import { feedbacks } from './constants';
import { FeedbackCard } from './feedback-card/feedback-card';
import styles from './index.module.scss';

export const Feedback = () => (
  <div className={styles.feedbacks}>
    <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
      Отзывы
    </Typography>
    <div className={ styles.gallery }>
      <Carousel>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard feedback={feedback} key={index} />
        ))}
      </Carousel>
    </div>
  </div>
);
