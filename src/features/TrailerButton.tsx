import { Play } from "lucide-react";

interface TrailerButtonProps {
  onClick: () => void;
}

export const TrailerButton = ({ onClick }: TrailerButtonProps) => {
  return (
    <button className="cursor-pointer transition-transform hover:scale-110 ml-2" onClick={onClick}>
      <Play size={30} />
    </button>
  );
};