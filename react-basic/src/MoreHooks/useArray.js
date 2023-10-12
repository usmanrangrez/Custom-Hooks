import { useCallback } from "react";
import { useState } from "react";

export const useArray = (initialValue) => {
  /*
 When you use functions as callbacks (e.g., in event handlers or as arguments to other functions), React can sometimes recreate these functions every time the component renders.
 This means that the functions won't be recreated unless the dependencies you specify change.
  */
  const [array, setArray] = useState(initialValue);

  const push = useCallback(
    (ele) =>
      setArray((prev) => {
        return [...prev, ele];
      }),
    []
  );

  // const replace = (index, ele) => {
  //   let updatedArr = [...array];
  //   updatedArr[index] = ele;
  //   setArray(updatedArr);
  // };

  const replace = useCallback((index, ele) => {
    setArray((prev) => {
      return [...prev.slice(0, index), ele, ...prev.slice(index + 1)];
    });
  }, []);

  // const filter = (array) => {
  //   setArray((prev) => {
  //     return prev.filter((item) => {
  //       return item < 3;
  //     });
  //   });
  // };

  const filter = useCallback((callback) => {
    setArray((prev) => {
      return prev.filter(callback);
    });
  }, []);

  // const remove = (ele) => {
  //   setArray((prev) => {
  //     return prev.filter((ele, i) => {
  //       return i != 1;
  //     });
  //   });
  // };

  const remove = useCallback((ele) => {
    setArray((prev) => {
      return [...prev.slice(0, ele), ...prev.slice(ele + 1)];
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
};
