import React, { FC, memo } from "react";
import cn from "classnames";

import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";

import styles from "./styles.module.scss";

interface PostTableInterface {
  className?: string;
  countRowsOnPage?: number;
}

const TransportationTable: FC<PostTableInterface> = ({ className, countRowsOnPage = 10 }) => {
  return (
    <table className={cn(styles.table, className)}>
      <TableHeader />
      <TableBody countRowsOnPage={countRowsOnPage} />
    </table>
  );
};

export default memo(TransportationTable);
