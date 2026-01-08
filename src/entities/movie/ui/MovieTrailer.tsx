import { Modal } from "../../../shared/ui/portal/Modal";

export interface MovieTrailerProps {
  isOpen: boolean;
  Close: () => void;
  videoKey?: string;
}

export const MovieTrailer = ({
  isOpen,
  Close,
  videoKey,
}: MovieTrailerProps) => {
  return (
    <Modal isOpen={isOpen} Close={Close}>
      <div className="p-10 bg-slate-800 rounded-lg text-white">
        {videoKey ? (
          <iframe className="w-full aspect-video h-auto sm:min-w-150"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoKey}`}
          />
        ) : (
          "Trailer not found :("
        )}
      </div>
    </Modal>
  );
};
