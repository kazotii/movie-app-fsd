interface Page {
  currentPage: number;
  totalPage: number;
  action: (currentPage: number) => void;
}

export const PageButton = ({ currentPage, totalPage, action }: Page) => {
  return (
    <div>
      <button className="cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => action(currentPage - 1)}
      >
        Prev
      </button>
      <span>
        {currentPage} - {totalPage}
      </span>
      <button className="cursor-pointer"
        disabled={currentPage === totalPage || currentPage === 500}
        onClick={() => action(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};