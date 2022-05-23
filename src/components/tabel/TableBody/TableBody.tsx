import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import TableBodyRow from "../TableBodyRow/TableBodyRow";
import CreateEmptyRows from "../../../utils/createEmptyRows";

import transportationsStore from "../../../mobx/transportationsStore";

import styles from "./styles.module.scss";

interface TableBodyProps {
  countRowsOnPage: number;
}

const TableBody: FC<TableBodyProps> = ({ countRowsOnPage }) => {
  const transportations = transportationsStore.transportations;

  return (
    <tbody className={styles.tBody}>
      {transportations.map((transportation) => (
        <TableBodyRow key={transportation.id} {...transportation} />
      ))}
      <CreateEmptyRows count={countRowsOnPage - transportations.length} />
    </tbody>
  );
};

export default observer(TableBody);
