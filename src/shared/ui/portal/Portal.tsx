import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const container = document.getElementById("modal-root");
  if (!container) return null;
  return createPortal(children, container);
};