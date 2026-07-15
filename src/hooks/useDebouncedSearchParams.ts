import { CATEGORY, PAGE } from "@consts/URLSearchParams";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useDebouncedSearchParams = ({
  key,
  delay,
}: {
  key: string;
  delay: number;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramValue = searchParams.get(key) ?? "";

  const [value, setValue] = useState(paramValue);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(paramValue);
  }, [paramValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (value !== paramValue) params.set(PAGE, "1");

      if (!value.trim()) {
        params.delete(key);
      } else {
        params.delete(CATEGORY);
        params.set(key, value);
      }

      setSearchParams(params);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, key, value, setSearchParams]);

  return { value, setValue };
};
