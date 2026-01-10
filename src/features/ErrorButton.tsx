import type { LucideIcon } from "lucide-react";

export interface ErrorStateProps {
  title: string;
  description: string;
  buttonText: string;
  action: () => void;
  Icon?: LucideIcon;
}

export const ErrorItem = ({
  title,
  description,
  buttonText,
  action,
  Icon,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center gap-10">
      {Icon && <Icon size={64} className="mb-4 text-white" />}
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        className="cursor-pointer font-bold text-amber-400 border-b-2 border-amber-400"
        onClick={action}
      >
        {buttonText}
      </button>
    </div>
  );
};