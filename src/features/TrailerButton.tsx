import { Play } from "lucide-react";

interface TrailerButtonProps {
  onClick: () => void;
}

export const TrailerButton = ({ onClick }: TrailerButtonProps) => {
  return (
    <button className="cursor-pointer transition-transform hover:scale-110" onClick={onClick}>
      Play
      <Play />
    </button>
  );
};