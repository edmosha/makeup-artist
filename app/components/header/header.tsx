import { Navigation } from '~/components/navigation/navigation';
import { Typography } from '~/components/typography';
import styles from './index.module.scss';
import Avatar from '../../assets/img/avatar.jpg';

export const Header = () => (
  <div className={styles.header}>
    <a className={styles.tg}>
      <img src={Avatar} alt='avatar' />
      <Typography size={'S'}>Написать напрямую <br/>в Telegram</Typography>
    </a>
    <Navigation />
    <div className={styles.record}>
      <div className={styles.record__circle} />
      <Typography size={'S'}>Ведется запись <br/>на июнь</Typography>
    </div>
  </div>
);
