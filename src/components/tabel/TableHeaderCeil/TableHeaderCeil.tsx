import React, { FC, useCallback, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import PointerIcon from "../../../icons/PointerIcon/PointerIcon";

import transportationsStore from "../../../mobx/transportationsStore";

import styles from "./styles.module.scss";

interface TableHeaderColumnInterface {
  title: string;
  sortBy?: string;
  className?: string;
}

const TableHeaderCeil: FC<TableHeaderColumnInterface> = ({ title, sortBy, className }) => {
  const [isOrderByASC, setIsOrderByASC] = useState(true);

  const sortByFromStore = transportationsStore.afterRequestFilters.sort;

  const handleHeaderClick = useCallback(() => {
    if (!sortBy) return;
    transportationsStore.setSort(sortBy);
    transportationsStore.setOrderBy(!isOrderByASC);
    setIsOrderByASC((prev) => !prev);

    transportationsStore.getList();
  }, [sortBy, isOrderByASC]);

  const ceilActive = useMemo(() => sortByFromStore === sortBy, [sortBy, sortByFromStore]);

  return (
    <th className={cn(styles.th, className)} onClick={handleHeaderClick}>
      <div>
        <span className={cn({ [styles.active]: ceilActive })}>{title}</span>
        {sortBy && (
          <PointerIcon
            className={cn(styles.pointerIcon, {
              [styles.active]: ceilActive,
              [styles.rotate]: !isOrderByASC && ceilActive,
            })}
          />
        )}
      </div>
    </th>
  );
};

export default observer(TableHeaderCeil);
