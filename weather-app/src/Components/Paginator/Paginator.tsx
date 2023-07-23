import "./Paginator.css";

const Paginator = ({ currentPage, totalPages, handlePageChange }) => {

  //switches to previous page
  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1);
  };
  //-------------

  //switches to next page
  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };
  //-------------

  //shows page numbers and on click calls handelPageChange function, which switches the page witch is shown
  const showPaginator = () => {
    const pageNumbers = [];

    for (let number = 1; number <= totalPages; number++) {
      pageNumbers.push(
        <li
          key={number}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </li>
      );
    }
    return pageNumbers;
  };
  //-------------

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
