import React, { FC, memo } from "react";

import { formatDate, formatTime } from "../../../utils/formatDate";

import { TransportationInterface } from "../../../types/Transportation";

import styles from "./styles.module.scss";

interface TableBodyRowProps extends Partial<TransportationInterface> {}

const TableBodyRow: FC<TableBodyRowProps> = ({ date, title, count, distance }) => {
  return (
    <tr className={styles.tr}>
      <td>
        <div className={styles.date}>{formatDate(date || "")}</div>
        <div className={styles.time}>{formatTime(date || "")}</div>
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
