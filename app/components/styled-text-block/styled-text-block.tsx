import { Typography } from '~/components/typography';
import type { ReactNode } from 'react';
import styles from './index.module.scss';

interface IStyledTextBlockProps {
  children: ReactNode;
  indentPct?: number
  disablePadding?: boolean
}

export const StyledTextBlock = ({ children, indentPct, disablePadding }: IStyledTextBlockProps) => {
  const padding = disablePadding ? 0 : undefined;
  const textIndent = indentPct !== undefined ? `${indentPct}%` : undefined;

  return (
    <div className={styles.textBlock} style={{ padding }}>
      <Typography size='5XL' className={styles.text} style={{ textIndent }}>
        { children }
      </Typography>
    </div>
  );
};
