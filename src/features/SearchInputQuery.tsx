import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../app/filterSlice";
import type { RootState } from "../app/store";
import type React from "react";
import { useEffect, useState } from "react";

export const SearchInput = () => {
  const query = useSelector((state: RootState) => state.filters.query);
  const [localValue, setLocalValue] = useState(query);
  const dispatch = useDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };
  useEffect(() => {
    const TimeoutId = setTimeout(() => {
      dispatch(setSearchQuery(localValue));
    }, 500);
    return () => {
      clearTimeout(TimeoutId);
    };
  }, [dispatch, localValue]);

  useEffect(() => {
    setLocalValue(query)
  }, [query])

  return (
    <input
      type="text"
      value={localValue}
      onChange={handleInputChange}
      placeholder="Search movies"
    />
  );
};