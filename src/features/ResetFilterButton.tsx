import { useDispatch } from "react-redux";
import { resetFilters } from "../entities/movie/model/filterSlice";

export const ResetFilter = () => {
  const dispatch = useDispatch();
  return <button className="cursor-pointer" onClick={() => dispatch(resetFilters())}>Reset all</button>;
};
