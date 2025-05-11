import { useRef, useState } from 'react';
import clsx from 'clsx';
import { RightMenu } from '~/components/right-menu/right-menu';
import Burger from '~/components/right-menu/burger';
import { useOnClickOutside } from '~/hooks/use-click-outside';
import styles from './index.module.scss';
import { NavigationLink } from './navigation-link';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  return (
    <nav className={styles.navigation} ref={ref}>
      <div className={styles.burger}>
        <Burger open={isMenuOpen} setOpen={setIsMenuOpen} />
      </div>

      <div className={clsx(styles.menu)}>
        <NavigationLink to='/#works' label='Работы' onClick={closeMenu} />
        <NavigationLink to='/#services' label='Услуги' onClick={closeMenu} />
        <NavigationLink to='/#contacts' label='Контакты' onClick={closeMenu} />
      </div>

      <RightMenu open={isMenuOpen} />
    </nav>
  );
};
