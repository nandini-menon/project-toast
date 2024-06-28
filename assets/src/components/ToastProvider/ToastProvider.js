import React, { createContext, useCallback, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastItems, setToastItems] = useState([])

  const createToast = ({ variant, message }) => {
    const nextToastItems = [...toastItems];
    nextToastItems.push({
      id: crypto.randomUUID(),
      variant,
      message
    });
    setToastItems(nextToastItems)
  };

  const deleteToast = ({ id }) => {
    const nextToastItems = toastItems.filter((toastItem) => {
      return toastItem.id !== id;
    });
    setToastItems(nextToastItems);
  };

  const handleEscape = useCallback(() => {
    setToastItems([]);
  }, []);

  useEscapeKey(handleEscape);

	return (
		<ToastContext.Provider
			value={{
        toastItems,
        createToast,
        deleteToast
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
