import React, { FC, memo, useCallback, useMemo } from "react";
import cn from "classnames";

import PointerIcon from "../../../icons/PointerIcon/PointerIcon";

import styles from "./styles.module.scss";

interface TableHeaderColumnInterface {
  title: string;
  sortBy: string;
  className?: string;
}

const TableHeaderCeil: FC<TableHeaderColumnInterface> = ({ title, sortBy, className }) => {
  const handleHeaderClick = useCallback(() => {}, []);

  const ceilActive = useMemo(() => {}, []);

  return (
    <th className={cn(styles.th, className)} onClick={handleHeaderClick}>
      <div>
        <span className={cn({ [styles.active]: ceilActive })}>{title}</span>
        <PointerIcon className={cn(styles.pointerIcon, { [styles.active]: ceilActive })} />
      </div>
    </th>
  );
};

export default memo(TableHeaderCeil);
