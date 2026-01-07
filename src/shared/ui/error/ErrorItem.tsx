export interface ErrorStateProps {
  title: string;
  description: string;
  buttonText: string;
  action: () => void;
}

export const ErrorItem = ({
  title,
  description,
  buttonText,
  action,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={action}>{buttonText}</button>
    </div>
  );
};