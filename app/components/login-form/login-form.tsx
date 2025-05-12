import { Controller, useForm } from 'react-hook-form';
import { Modal } from '~/components/modal/modal';
import { useState } from 'react';
import { Typography } from '~/components/typography';
import { Check } from 'lucide-react';
import { useAuth } from '~/shared/AuthContex';
import { InputMask } from '@react-input/mask';
import OtpInput from 'react-otp-input';
import styles from './index.module.scss';

interface ILoginFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  phone: string
  policy: boolean
  otp: string
}

export const LoginForm = ({ open, onClose }: ILoginFormProps) => {
  const [stage, setStage] = useState('login');
  const { setIsAuth } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<FormData>();

  const handleSendPhone = () => {
    setStage('code');
  };

  const handleSendCode = () => {
    setIsAuth(true);
    onClose();
    setStage('login');
    reset();
  };

  const renderBody = () => {
    if (stage === 'code') {
      return (
        <div className={ styles.container }>
          <Typography as='h2' variant='body' size='5XL'>
            Войти
          </Typography>
          <form className={ styles.form } onSubmit={ handleSubmit(handleSendCode) }>
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
                Войти
              </Typography>
            </button>
          </form>
        </div>
      );
    }

    return (
      <div className={ styles.container }>
        <Typography as='h2' variant='body' size='5XL'>
          Войти
        </Typography>
        <form className={ styles.form } onSubmit={ handleSubmit(handleSendPhone) }>
          <InputMask
            mask='+7 ___ ___ __ __'
            replacement='_'
            showMask
            className={ styles.input }
            placeholder='+7 900 000 00 00'
            { ...register('phone') }
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
              Согласен с&nbsp;
              <Typography as='span' className={ styles.link }>
                политикой обработки персональных данных
              </Typography>
            </Typography>
          </label>
          <button className={ styles.submitBtn } type='submit'>
            <Typography variant='body' size='L'>
              Отправить код
            </Typography>
          </button>
        </form>
      </div>
    );
  };

  return (
    <Modal open={ open } onClose={ onClose }>
      {renderBody()}
    </Modal>
  );
};
