import type { LucideIcon } from "lucide-react";

export interface ErrorStateProps {
  title: string;
  description: string;
  buttonText: string;
  action: () => void;
  Icon?: LucideIcon 
}

export const ErrorItem = ({
  title,
  description,
  buttonText,
  action,
  Icon,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {Icon && <Icon size={64} className="mb-4 text-white"/>}
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="cursor-pointer" onClick={action}>{buttonText}</button>
    </div>
  );
};