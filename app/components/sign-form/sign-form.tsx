import { useForm } from 'react-hook-form';
import { Modal } from '~/components/modal/modal';
import { useState } from 'react';
import { Typography } from '~/components/typography';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import styles from './index.module.scss';

interface IFeedbackCardProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string
  phone: string
  variant: string
  date: Date
  place: string
  description: string
  policy: boolean
}

export const SignForm = ({ open, onClose }: IFeedbackCardProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const renderBody = () => {
    if (isSubmitted) {
      return (
        <div className={ styles.container }>
          <Typography as='h2' variant='body' size='5XL'>
            Форма отправлена!
          </Typography>
          <button className={ styles.submitBtn } type='button' onClick={ onClose }>
            <Typography variant='body' size='L'>
              Закрыть
            </Typography>
          </button>
        </div>
      );
    }

    return (
      <div className={ styles.container }>
        <Typography as='h2' variant='body' size='5XL'>
          Записаться на макияж
        </Typography>
        <Typography as='h2' variant='body' size='L' className={ styles.info }>
          Оставь свои контакты и я с тобой свяжусь уже сегодня.
        </Typography>
        <form className={ styles.form } onSubmit={ handleSubmit(handleFormSubmit) }>
          <input
            className={ styles.input }
            placeholder='Твое имя'
            { ...register('name') }
          />
          <select
            className={ styles.input }
            defaultValue='call'
            { ...register('variant') }
          >
            <option value='call'>Созвониться</option>
            <option value='tg'>Telegram</option>
            <option value='whatsapp'>Whatsapp</option>
          </select>
          <input
            className={ styles.input }
            placeholder='+7 900 000 00 00'
            { ...register('phone') }
          />
          <input
            className={ styles.input }
            type='date'
            placeholder='Дата'
            { ...register('date') }
          />
          <input
            className={ styles.input }
            placeholder='Место'
            { ...register('place') }
          />
          <textarea
            className={ clsx(styles.input, styles.textarea) }
            placeholder='Если есть пожелания по макияжу - опиши их'
            { ...register('description') }
          />
          {/* <div className={ styles.row } /> */ }
          {/* <div className={ styles.row } /> */ }
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
              Отправить
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
