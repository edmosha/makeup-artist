import type { ReactNode } from 'react';
import { Typography } from '~/components/Typography';
import styles from './index.module.scss';

interface IChipsProps {
  text: ReactNode;
}

export const Chip = ({ text }:IChipsProps) => (
  <div className={styles.chips}>
    <Typography size={'M'}>{ text }</Typography>
  </div>
);
