import { type ReactNode, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './index.module.scss';

interface IModalProps {
  children?: ReactNode
  open: boolean
  onClose: () => void
}

export const Modal = ({ children, open, onClose }: IModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!wrapperRef || !wrapperRef.current) return;

    if (wrapperRef.current.contains(e.target as HTMLElement)) {
      onClose();
    }

  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [wrapperRef]);

  if (!open) return null;

  return (
    createPortal((
      <div className={ styles.container }>
        <div className={ styles.overlay } ref={ wrapperRef } />
        <div className={ styles.modal }>
          { children }
        </div>
        <button className={ styles.close } onClick={ onClose }>
          <X size={ 60 } strokeWidth={ 1 }/>
        </button>
      </div>
    ), document.body)
  );
};
