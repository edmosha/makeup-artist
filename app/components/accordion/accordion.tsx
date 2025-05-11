import { Typography } from '~/components/typography';
import styles from './index.module.scss';

interface IAccordionProps {
  title: string;
  text: string;
}

export const Accordion = ({ title, text }: IAccordionProps) => (
  <div className={styles.accordion}>
    <label>
      <input type='checkbox' className={styles.hidden_input}/>
      <div className={ styles.button }>
        <Typography as='h3' variant='title' size='4XL'>
          { title }
        </Typography>
      </div>
    </label>
    <div className={ styles.content }>
      <Typography size='XXL' className={styles.inner_text}>
        { text }
      </Typography>
    </div>
  </div>
);
