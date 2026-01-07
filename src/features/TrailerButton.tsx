interface TrailerButtonProps {
  onClick: () => void;
}

export const TrailerButton = ({ onClick }: TrailerButtonProps) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      Play
    </button>
  );
};