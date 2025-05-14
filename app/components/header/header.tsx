import { Navigation } from '~/components/navigation/navigation';
import { Typography } from '~/components/typography';
import { LoginForm } from '~/components/login-form/login-form';
import { useState } from 'react';
import { useAuth } from '~/shared/context/AuthContex';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Avatar from '../../assets/img/avatar.jpg';

export const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const { isAuth } = useAuth();

  const handleOpen = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };

  const renderProfile = () => {
    if (!isAuth) {
      return (
        <>
          <button className={ styles.login } onClick={ handleOpen }>
            <Typography size='L'>
              Войти
            </Typography>
          </button>
          <div className={ styles.record }>
            <div className={ styles.record__circle }/>
            <Typography size='M' variant='title'>
              Ведется запись <br/>на июнь
            </Typography>
          </div>
        </>
      );
    }

    const userName = localStorage.getItem('userName') || 'Елизавета';

    return (
      <Link to='/profile' className={ styles.profile }>
        <CircleUserRound size={24} strokeWidth={1} />
        <Typography size='L'>{userName}</Typography>
      </Link>
    );
  };

  return (
    <div className={ styles.header }>
      <a className={ styles.tg }>
        <img src={ Avatar } alt='avatar'/>
        <Typography size='S'>Написать напрямую <br/>в Telegram</Typography>
      </a>
      <Navigation />
      <div className={styles.right_block}>
        { renderProfile() }
      </div>

      <LoginForm open={openLogin} onClose={handleClose} />
    </div>
  );
};
