import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";

import transportationsStore from "../../mobx/transportationsStore";

import styles from "./styles.module.scss";

interface PostTableInterface {
  className?: string;
  countRowsOnPage?: number;
}

const TransportationTable: FC<PostTableInterface> = ({ className, countRowsOnPage = 10 }) => {
  useEffect(() => {
    transportationsStore.getList();
  }, []);

  return (
    <table className={cn(styles.table, className)}>
      <TableHeader />
      <TableBody countRowsOnPage={countRowsOnPage} />
    </table>
  );
};

export default observer(TransportationTable);
