import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../app/store/filterSlice";
import type { RootState } from "../app/store/store";
import type React from "react";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.filters.query);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search movies"
    />
  );
};
