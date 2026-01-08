import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
      <button
        className="cursor-pointer flex items-center gap-2 mb-6 px-4 bg-slate-800 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-md group"
        onClick={() => navigate(-1)}
      >
        <ArrowBigLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
      </button>
  );
};