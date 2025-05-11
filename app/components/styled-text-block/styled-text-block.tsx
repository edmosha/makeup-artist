import { Typography } from '~/components/typography';
import type { ReactNode } from 'react';
import styles from './index.module.scss';

interface IStyledTextBlockProps {
  children: ReactNode;
}

export const StyledTextBlock = ({ children }: IStyledTextBlockProps) => (
  <div className={styles.textBlock}>
    <Typography size='5XL' className={styles.text}>
      { children }
    </Typography>
  </div>
);
