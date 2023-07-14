import "./Paginator.css";

const Paginator = ({ currentPage, totalPages, handlePageChange }) => {
  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const showPaginator = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div className="PaginatorWrapper">
      <ul className="Paginator">
        <li>
          <button disabled={currentPage === 1} onClick={handlePreviousPage}>
            &laquo;
          </button>
        </li>
        {showPaginator()}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginator;
