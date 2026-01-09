import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
      <button
        className="cursor-pointer transition-transform hover:scale-110 -mt-5 mb-3"
        onClick={() => navigate(-1)}
      >
        <ArrowBigLeft
          size={30}
        />
      </button>
  );
};