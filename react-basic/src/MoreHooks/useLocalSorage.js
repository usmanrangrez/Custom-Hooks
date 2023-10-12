import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    } else {
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    }
  });

  useEffect(() => {
    if (value == undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue];
};
