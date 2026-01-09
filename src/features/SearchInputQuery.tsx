import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../entities/movie/model/filterSlice";
import type { RootState } from "../app/store/store";
import type React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const query = useSelector((state: RootState) => state.filters.query);
  const [localValue, setLocalValue] = useState(query);
  const dispatch = useDispatch();
  const Maps = useNavigate()
  const location = useLocation()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };
  useEffect(() => {
    const TimeoutId = setTimeout(() => {
      if(localValue.trim() && location.pathname !== '/'){
        Maps('/')
      }
      dispatch(setSearchQuery(localValue));
    }, 500);
    return () => {
      clearTimeout(TimeoutId);
    };
  }, [dispatch, localValue, Maps, location]);

  useEffect(() => {
    setLocalValue(query);
  }, [query]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
    className="w-full px-2 py-1 transition-all rounded-lg border border-white"
      ref={inputRef}
      type="text"
      value={localValue}
      onChange={handleInputChange}
      placeholder="Search movies"
    />
  );
};
