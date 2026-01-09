import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { memo } from "react";

interface Page {
  currentPage: number;
  totalPage: number;
  action: (currentPage: number) => void;
}

export const PageButton = memo(({ currentPage, totalPage, action }: Page) => {
  return (
    <div className="flex mb-2 gap-3">
      <ArrowBigLeft
      size={30}
        className={`cursor-pointer ${
          currentPage === 1 ? "opacity-20 pointer-events-none" : ""
        }`}
        onClick={() => action(currentPage - 1)}
      />
      <p className="text-2xl">{currentPage}</p>
      <ArrowBigRight
      size={30}
        className={`cursor-pointer ${
          currentPage >= 500 || currentPage >= totalPage
            ? "opacity-20 pointer-events-none"
            : ""
        }`}
        onClick={() => action(currentPage + 1)}
      />
    </div>
  );
});