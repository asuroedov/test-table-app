import React, { FC, memo } from "react";
import TableBodyRow from "../components/tabel/TableBodyRow/TableBodyRow";

const CreateEmptyRows: FC<{ count: number }> = ({ count }) => {
  if (count < 0) return <></>;
  return (
    <>
      {new Array(count).fill(0, 0).map((_, index) => (
        <TableBodyRow key={index} />
      ))}
    </>
  );
};

export default memo(CreateEmptyRows);
