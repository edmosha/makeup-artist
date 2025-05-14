import { Typography } from '~/components/typography';
import clsx from 'clsx';
import type { IProfileServiceCard } from './types';
import styles from './index.module.scss';

interface IServiceCardProps {
  card: IProfileServiceCard
  darkTheme?: boolean
  withLink?: boolean
}

export const ProfileServiceCard = ({ card, darkTheme, withLink }: IServiceCardProps) => {
  const { status, description, service, address, date } = card;

  return (
    <div className={ clsx(styles.card, { [styles.card_dark_theme]: darkTheme }) }>
      <div className={ styles.badge }>
        <Typography size='M'>
          { status }
        </Typography>
      </div>
      <div className={styles.block}>
        <Typography variant='title' size='XXL' as='h2'>
          { service }
        </Typography>
        <Typography size='L' className={ styles.description }>
          { description }
        </Typography>
      </div>
      <div className={styles.block}>
        <Typography variant='title' size='XL' className={ styles.bottom_text }>
          Место:&nbsp;&nbsp;{ address }
        </Typography>
        <Typography variant='title' size='XL' className={ styles.bottom_text }>
          Дата:&nbsp;&nbsp;{ date }
        </Typography>
      </div>
      { withLink && (
        <Typography size='L' as='a' className={styles.link}>
          Заполнить обратную связь
        </Typography>
      ) }
    </div>
  );
};
