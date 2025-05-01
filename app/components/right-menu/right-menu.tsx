import clsx from 'clsx';
import styles from './index.module.scss';

interface IRightMenuProps {
  open: boolean;
}

export const RightMenu = ({ open }: IRightMenuProps) => (
  <div className={clsx(styles.menu, { [styles.open]: open })}>
    <a href='/'>
      <span role='img' aria-label='about us'>
        💁🏻‍♂️
      </span>
      About us
    </a>
    <a href='/'>
      <span role='img' aria-label='price'>
        💸
      </span>
      Pricing
    </a>
    <a href='/'>
      <span role='img' aria-label='contact'>
        📩
      </span>
      Contact
    </a>
  </div>
);
