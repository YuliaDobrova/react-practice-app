import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import styles from './Pagination.module.css';
// import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  // let pagesArray = getPagesArray(totalPages);
  let pagesArray = usePagination(totalPages);
  return (
    <div className={styles.pageWrapper}>
      {pagesArray.map(p => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p ? `${styles.pageBtnCurrent}` : `${styles.pageBtn}`
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
