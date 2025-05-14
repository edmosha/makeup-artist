import { useForm } from 'react-hook-form';
import { Modal } from '~/components/modal/modal';
import { useState } from 'react';
import { Typography } from '~/components/typography';
import { useAuth } from '~/shared/context/AuthContex';
import { RegisterForm } from '~/components/register-form/register-form';
import { InputMask } from '@react-input/mask';
import { useNavigate } from 'react-router';
import useLoad from '~/hooks/use-load';
import { Loader } from '~/components/loader/loader';
import styles from './index.module.scss';

interface ILoginFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  phone: string
  password: string
}

export const LoginForm = ({ open, onClose }: ILoginFormProps) => {
  const [stage, setStage] = useState('login');

  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const handleClose = () => {
    onClose();
    reset();
    setStage('login');
  };

  const handleLogin = async () => {
    setIsAuth(true);
    handleClose();
    navigate('/profile');
  };

  const handleRegister = () => {
    setStage('login');
  };

  const redirectToRegister = () => {
    setStage('register');
  };

  const { isLoading, withLoadFn: handleDelayedLogin } = useLoad(1500, handleLogin);

  const renderBody = () => {
    if (stage === 'register') {
      return <RegisterForm onRegister={handleRegister} />;
    }

    return (
      <div className={ styles.container }>
        <Typography as='h2' variant='body' size='5XL'>
          Вход
        </Typography>
        <form className={ styles.form } onSubmit={ handleSubmit(handleDelayedLogin) }>
          <InputMask
            mask='+7 ___ ___ __ __'
            replacement='_'
            showMask
            className={ styles.input }
            placeholder='+7 900 000 00 00'
            { ...register('phone') }
          />
          <input
            className={ styles.input }
            placeholder='Пароль'
            { ...register('password') }
          />
          <div className={styles.actions}>
            <button className={ styles.submit } type='submit'>
              <Typography variant='body' size='L'>
                { isLoading ? <Loader/> : 'Войти' }
              </Typography>
            </button>
            <button className={ styles.register } onClick={ redirectToRegister }>
              <Typography variant='body' size='L' as='span'>
                Нет аккаунта?
              </Typography>
              <Typography variant='body' size='L' as='span'>
                Зарегестрироваться
              </Typography>
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Modal open={ open } onClose={ handleClose }>
      { renderBody() }
    </Modal>
  );
};
