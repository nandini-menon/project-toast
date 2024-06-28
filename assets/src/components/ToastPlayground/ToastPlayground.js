import React, { useContext, useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(VARIANT_OPTIONS[0]);

  const { toastItems, createToast, deleteToast } = useContext(ToastContext);

  const onToastMessageChange = (e) => {
    setToastMessage(e.target.value);
  }

  const onToastTypeChange = (e) => {
    setToastType(e.target.value);
  }

  const onPopToastClick = () => {
    createToast({
      variant: toastType,
      message: toastMessage
    });

    // Clearing the textarea
    setToastMessage("");
  }

  const handleDismiss = ({ id }) => {
    deleteToast({ id });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        toastItems={toastItems}
        handleDismiss={handleDismiss}
      />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={toastMessage} onChange={onToastMessageChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map((option) => {
              return (
                <label htmlFor={`variant-${option}`} key={option} onChange={onToastTypeChange}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={toastType === option}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={onPopToastClick}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
