import React, { FC, memo } from "react";

import TableBodyRow from "../TableBodyRow/TableBodyRow";
import CreateEmptyRows from "../../../utils/createEmptyRows";

import { mockData } from "../mock";

import styles from "./styles.module.scss";

interface TableBodyProps {
  countRowsOnPage: number;
}

const TableBody: FC<TableBodyProps> = ({ countRowsOnPage }) => {
  const transportations = mockData;

  return (
    <tbody className={styles.tBody}>
      {transportations.map((transportation) => (
        <TableBodyRow key={transportation.id} {...transportation} />
      ))}
      <CreateEmptyRows count={countRowsOnPage - transportations.length} />
    </tbody>
  );
};

export default memo(TableBody);
