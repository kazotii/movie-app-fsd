import React from "react";

export const Skeleton: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-700 ${className}`}
      style={{ minHeight: "10px", minWidth: "10px", border: "2px solid white" }}
    ></div>
  );
};
