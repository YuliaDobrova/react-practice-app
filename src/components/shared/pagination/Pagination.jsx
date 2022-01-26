import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
// import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  // let pagesArray = getPagesArray(totalPages);
  let pagesArray = usePagination(totalPages);
  return (
    <div className="pageWrapper">
      {pagesArray.map(p => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'pageBtn current' : 'pageBtn'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
