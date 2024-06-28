import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastItems, handleDismiss }) {
  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toastItems.map(({ variant, message, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} handleDismiss={handleDismiss} toastId={id}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
