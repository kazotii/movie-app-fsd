import { memo } from "react";

interface Page {
  currentPage: number;
  totalPage: number;
  action: (currentPage: number) => void;
}

export const PageButton = memo(({ currentPage, totalPage, action }: Page) => {
  const pages = [currentPage - 1, currentPage, currentPage + 1];
  const filteredPages = pages.filter(
    (p) => p >= 1 && p <= totalPage && p <= 500
  );

  return (
    <div>
      {filteredPages.map((p) => (
        <button className="cursor-pointer mr-1" key={p} onClick={() => action(p)}>
          {p}
        </button>
      ))}
    </div>
  );
})
