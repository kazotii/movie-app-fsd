import { Modal } from "../../../shared/ui/portal/Modal";

export interface MovieTrailerProps {
  isOpen: boolean;
  Close: () => void;
}

export const MovieTrailer = ({ isOpen, Close }: MovieTrailerProps) => {
  return (
    <Modal isOpen={isOpen} Close={Close}>
      <div className="p-10 bg-slate-800 rounded-lg">
        <h1 className="text-white">Its Modal</h1>
        <p className="text-gray-400">Тут скоро будет плеер</p>
      </div>
    </Modal>
  );
};