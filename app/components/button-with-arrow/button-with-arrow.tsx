import type { ReactNode } from 'react';
import { Typography } from '~/components/typography';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';

interface IButtonWithArrowProps {
  text?: ReactNode;
  onClick?: () => void;
}

export const ButtonWithArrow = ({ text, onClick }: IButtonWithArrowProps) => (
  <button className={ styles.button } onClick={onClick}>
    <Typography size='XXL'>{text}</Typography>
    <span className={ styles.arrow }>
      <ArrowRight/>
    </span>
  </button>
);
