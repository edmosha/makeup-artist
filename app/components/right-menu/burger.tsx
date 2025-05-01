import { Menu, X } from 'lucide-react';
import styles from './index.module.scss';

interface IBurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Burger = ({ open, setOpen }: IBurgerProps) => (
  <button onClick={() => setOpen(!open)} className={styles.burger}>
    {open
      ? <X size={30} color={'white'} />
      : <Menu size={30} color={'white'} />
      }
  </button>
);

export default Burger;
