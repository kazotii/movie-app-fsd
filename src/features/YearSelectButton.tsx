import { useDispatch, useSelector } from "react-redux";
import { setYear } from "../app/filterSlice";
import type { RootState } from "../app/store";
import { useMoviePrefetch } from "../app/useMoviePrefetch";

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, number) => currentYear - number
);

export const YearSelect = () => {
  const currentSelectedYear = useSelector(
    (state: RootState) => state.filters.year
  );
  const dispatch = useDispatch();
  const prefetch = useMoviePrefetch()
  return (
    <>
      <select className="cursor-pointer" onMouseEnter={() => {prefetch()}}
        value={currentSelectedYear ?? 0}
        onChange={(e) => dispatch(setYear(Number(e.target.value)))}
      >
        <option className="cursor-pointer" value={0}>Choose a year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};
