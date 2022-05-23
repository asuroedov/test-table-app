import React, { FC, memo } from "react";

import { TransportationInterface } from "../../../types/Transportation";

import styles from "./styles.module.scss";

interface TableBodyRowProps extends Partial<TransportationInterface> {}

const TableBodyRow: FC<TableBodyRowProps> = ({ id, title, count, distance }) => {
  return (
    <tr className={styles.tr}>
      <td>
        <div>{id}</div>
      </td>
      <td>
        <div>{title}</div>
      </td>
      <td>
        <div>{count}</div>
      </td>
      <td>
        <div>{distance}</div>
      </td>
    </tr>
  );
};

export default memo(TableBodyRow);
