import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import styles from './index.module.scss';

interface ITypographyProps {
  variant?: 'body' | 'title',
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL' | '4XL' | '5XL' | '6XL'
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'a'
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export const Typography = ({
  variant = 'body',
  size = 'M',
  as: Component = 'p',
  children,
  className,
  style,
  onClick,
}: ITypographyProps) => (
  <Component
    className={clsx(styles.typography, styles[`typography__${variant}__${size}`], className)}
    onClick={onClick}
    style={style}
  >
    {children}
  </Component>
);
