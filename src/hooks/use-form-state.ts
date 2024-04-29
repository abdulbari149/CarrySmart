import { useState } from 'react';

const useFormState = <TData extends object>(initialState: TData) => {
  const [state, setState] = useState(initialState);

  const handleChange = <TKey extends keyof typeof state>(key: TKey) => <
    TValue extends typeof state[TKey]
  >(
    value: TValue | ((prev: TValue) => TValue),
  ) => {
    setState((prevData) => {
      let result: TValue;
      if (value instanceof Function) {
        result = value(prevData[key] as TValue);
      } else {
        result = value;
      }
      return {
        ...prevData,
        [key]: result,
      };
    });
  };
  return { values: state, handleChange };
};

export default useFormState;
