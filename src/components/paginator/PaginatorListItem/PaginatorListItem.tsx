import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface PaginatorProgressItemProps {
  value: number;
  active: boolean;
  onClick: () => void;
}

const PaginatorListItem: FC<PaginatorProgressItemProps> = ({ value, active, onClick }) => {
  return (
    <div className={cn(styles.progressItem, { [styles.active]: active })} onClick={onClick}>
      {value}
    </div>
  );
};

export default memo(PaginatorListItem);
