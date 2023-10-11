import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
};
