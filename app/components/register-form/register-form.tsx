import { Controller, useForm } from 'react-hook-form';
import { Typography } from '~/components/typography';
import { Check } from 'lucide-react';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import styles from './index.module.scss';

interface IRegisterFormProps {
  onRegister: () => void;
}

interface FormData {
  name: string
  email: string
  password: string
  passwordRepeat: string
  policy: boolean
  otp: string
}

export const RegisterForm = ({ onRegister }: IRegisterFormProps) => {
  const [stage, setStage] = useState('register');

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
  } = useForm<FormData>();

  const handleRegister = () => {
    onRegister();
    localStorage.setItem('userName', getValues('name'));
    reset();
  };

  const handleConfirmPhone = () => {
    setStage('code');
  };

  if (stage === 'code') {
    return (
      <div className={ styles.container }>
        <Typography as='h2' variant='body' size='5XL'>
          Войти
        </Typography>
        <form className={ styles.form } onSubmit={ handleSubmit(handleRegister) }>
          <Controller
            name='otp'
            control={control}
            render={({ field }) => (
              <OtpInput
                numInputs={6}
                renderInput={(props) => (
                  <input {...props} className={styles.otp} />
                )}
                { ...field }
                onChange={field.onChange}
              />
            )}
          />
          <button className={ styles.submitBtn } type='submit'>
            <Typography variant='body' size='L'>
              Подтвердить номер
            </Typography>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={ styles.container }>
      <Typography as='h2' variant='body' size='5XL'>
        Регистрация
      </Typography>
      <form className={ styles.form } onSubmit={ handleSubmit(handleConfirmPhone) }>
        <input
          className={ styles.input }
          placeholder='Твое имя'
          { ...register('name') }
        />
        <input
          className={ styles.input }
          placeholder='Email'
          { ...register('email') }
        />
        <input
          className={ styles.input }
          placeholder='Пароль'
          { ...register('password') }
        />
        <input
          className={ styles.input }
          placeholder='Повтор пароля'
          { ...register('passwordRepeat') }
        />
        <label className={ styles.checkbox }>
          <input
            type='checkbox'
            className={ styles.checkbox_input }
            { ...register('policy') }
          />
          <span className={ styles.checkbox_new }>
            <Check className={ styles.checkbox_check_icon }/>
          </span>
          <Typography as='span'>
            Согласна с&nbsp;
            <Typography as='span' className={ styles.link }>
              политикой обработки персональных данных
            </Typography>
          </Typography>
        </label>
        <button className={ styles.submitBtn } type='submit'>
          <Typography variant='body' size='L' as='span'>
            Зарегистрироваться
          </Typography>
        </button>
      </form>
    </div>
  );
};
