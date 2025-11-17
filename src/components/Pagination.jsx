const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center gap-4 mt-8">
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="px-4 py-2 bg-gray-100 rounded">Page {currentPage} of {totalPages}</span>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
