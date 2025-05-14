import clsx from 'clsx';
import { Typography } from '~/components/typography';
import { LogOut } from 'lucide-react';
import { useAuth } from '~/shared/context/AuthContex';
import { useNavigate } from 'react-router';
import useLoad from '~/hooks/use-load';
import { Loader } from '~/components/loader/loader';
import { Services } from './components/services/services';
import styles from './index.module.scss';

export const ProfilePage = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate('/');
  };

  const { isLoading, withLoadFn: handleDelayedLogout } = useLoad(1500, handleLogout);

  return (
    <div className={clsx('page_paddings', styles.page)}>
      <div className={styles.title}>
        <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
          Личный кабинет
        </Typography>
        <button className={styles.logout} onClick={handleDelayedLogout}>
          {isLoading ? <Loader/> : <LogOut size={30} />}
        </button>
      </div>
      <Services />
    </div>
  );
};
