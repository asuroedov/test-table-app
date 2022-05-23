import React, { FC, memo, useCallback } from "react";

import PaginatorProgressItem from "../PaginatorListItem/PaginatorListItem";

import styles from "./styles.module.scss";

interface PaginatorProgressProps {
  currentPage: number;
  pageCounts: number;
  onChange: (page: number) => void;
}

const PaginatorPagesList: FC<PaginatorProgressProps> = ({ pageCounts, currentPage, onChange }) => {
  const handlePaginatorItemClick = useCallback(
    (page: number) => {
      return function () {
        onChange(page);
      };
    },
    [onChange],
  );

  return (
    <div className={styles.paginatorProgress}>
      {new Array(pageCounts).fill(0, 0).map((_, index) => (
        <PaginatorProgressItem
          key={index + 1}
          value={index + 1}
          active={currentPage === index + 1}
          onClick={handlePaginatorItemClick(index + 1)}
        />
      ))}
    </div>
  );
};

export default memo(PaginatorPagesList);
