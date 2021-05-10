import { useEffect, useState } from "react";

export const useDebounce = (value: string, seconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, seconds);
      // Cancel the timeout if value or seconds changes
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value or seconds changes.
    [value, seconds]
  );

  return debouncedValue;
};

export default useDebounce;
