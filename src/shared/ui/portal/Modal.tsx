import type { ReactNode } from "react";
import { Portal } from "./Portal";

export interface ModalProps {
  isOpen: boolean;
  Close: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, Close, children }: ModalProps) => {
  if (isOpen === false) return null;
  if (isOpen)
    return (
      <Portal>
        <div className="flex items-center justify-center fixed inset-0 bg-black/50" onClick={Close}>
          <div onClick={((e) => e.stopPropagation())}>
            {children}
          </div>
        </div>
      </Portal>
    );
};
