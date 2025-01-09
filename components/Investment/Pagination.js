import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5; // Show a maximum of 5 pages at a time

  // Determine the range of page numbers to display
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Adjust startPage if we're at the end of the list
  if (endPage === totalPages) {
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  // Generate an array of page numbers to display
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 px-[10px] text-[16px] py-1 rounded ${
          currentPage === 1 ? "" : "text-accent"
        } text-accent`}
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-[10px] text-[12px] py-1 rounded ${
            page === currentPage
              ? "bg-accent"
              : "bg-accent/80 hover:bg-accent/60"
          } text-white`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 px-[10px] text-[16px] py-1 rounded ${
          currentPage === totalPages ? "" : "text-accent"
        } text-accent`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
