import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import cn from "classnames";

import PaginatorButton from "./PaginatorButton/PaginatorButton";
import PaginatorProgress from "./PaginatorPagesList/PaginatorPagesList";

import styles from "./styles.module.scss";

interface PaginatorProps {
  className?: string;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Paginator: FC<PaginatorProps> = ({ className, totalCount, pageSize, currentPage, onChange }) => {
  const [pageCounts, setPageCounts] = useState(0);

  useEffect(() => {
    setPageCounts(Math.ceil(totalCount / pageSize));
  }, [totalCount, pageSize]);

  const nextBtnDisabled = useMemo(() => {
    return currentPage >= pageCounts;
  }, [currentPage, pageCounts]);

  const prevBtnDisabled = useMemo(() => {
    return currentPage <= 1;
  }, [currentPage]);

  const handleBackClick = useCallback(() => {
    if (prevBtnDisabled) return;
    const prevPage = currentPage - 1;
    onChange(prevPage);
  }, [currentPage, prevBtnDisabled, onChange]);

  const handleForwardClick = useCallback(() => {
    if (nextBtnDisabled) return;
    const nextPage = currentPage + 1;
    onChange(nextPage);
  }, [currentPage, nextBtnDisabled, onChange]);

  return (
    <div className={cn(styles.paginatorWrapper, className)}>
      <PaginatorButton text={"Назад"} onClick={handleBackClick} disabled={prevBtnDisabled} />
      <PaginatorProgress currentPage={currentPage} pageCounts={pageCounts} onChange={onChange} />
      <PaginatorButton text={"Далее"} onClick={handleForwardClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default memo(Paginator);
