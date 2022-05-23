import React, { memo } from "react";

import TableHeaderCeil from "../TableHeaderCeil/TableHeaderCeil";

import styles from "./styles.module.scss";

const columns: { id: number; title: string; sortBy?: string }[] = [
  { id: 1, title: "Дата" },
  { id: 2, title: "Заголовок", sortBy: "title" },
  { id: 3, title: "Количество", sortBy: "count" },
  { id: 4, title: "Расстояние", sortBy: "distance" },
];

const TableHeader = () => {
  return (
    <thead className={styles.head}>
      <tr>
        {columns.map((column) => (
          <TableHeaderCeil key={column.id} title={column.title} sortBy={column.sortBy} />
        ))}
      </tr>
    </thead>
  );
};

export default memo(TableHeader);
