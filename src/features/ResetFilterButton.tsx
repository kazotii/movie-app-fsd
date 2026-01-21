import { useSearchParams } from "react-router-dom";
export const ResetFilter = () => {
  const [, setSearchParams] = useSearchParams();
  return (
    <button
      className="cursor-pointer bg-gray-900 text-white"
      onClick={() => setSearchParams({})}
    >
      Reset
    </button>
  );
};