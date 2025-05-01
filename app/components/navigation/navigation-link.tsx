import { Link } from 'react-router-dom';
import styles from './index.module.scss';

interface NavigationLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

export const NavigationLink = ({ to, label, onClick }: NavigationLinkProps) => (
  <Link to={to} onClick={onClick} className={styles.link}>
    {label}
  </Link>
);
