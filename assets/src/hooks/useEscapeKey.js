import { useEffect } from "react";


const useEscapeKey = (action) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Escape') {
        action();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [action]);
};

export default useEscapeKey;
