import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../entities/movie/model/filterSlice";
import type { RootState } from "../app/store/store";
import type React from "react";
import { useEffect, useState, useRef } from "react";

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
    setLocalValue(query);
  }, [query]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={localValue}
      onChange={handleInputChange}
      placeholder="Search movies"
    />
  );
};
