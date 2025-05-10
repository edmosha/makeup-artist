import type { ReactNode } from 'react';
import { Typography } from '~/components/typography';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';

interface IButtonWithArrowProps {
  text?: ReactNode;
}

export const ButtonWithArrow = ({ text }:IButtonWithArrowProps) => (
  <button className={ styles.button }>
    <Typography size='XXL'>{text}</Typography>
    <span className={ styles.arrow }>
      <ArrowRight/>
    </span>
  </button>
);
