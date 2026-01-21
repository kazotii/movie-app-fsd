import { useSearchParams } from "react-router-dom";

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, number) => currentYear - number,
);

export const YearSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSelectedYear = searchParams.get("year") || 0;

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const value = e.target.value;

    if (value === "0") {
      newParams.delete("year");
    } else {
      newParams.set("year", value);
    }

    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  return (
    <select
      className="cursor-pointer bg-gray-900 text-white"
      value={currentSelectedYear}
      onChange={handleYearChange}
    >
      <option value={0}>Choose a year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};