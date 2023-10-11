import { useState } from "react";

export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((currVal) => !currVal);
  }

  return [value, toggle];
};
