import React, { useCallback, useMemo, useState } from "react";

import Select from "../select/Select";

import transportationsStore from "../../mobx/transportationsStore";
import { prepareWhere } from "../../utils/prepareWhere";

import styles from "./styles.module.scss";

const tableFields = [
  { value: "date", label: "Дата" },
  { value: "title", label: "Заголовок" },
  { value: "count", label: "Количество" },
  { value: "distance", label: "Расстояние" },
];

const operations = [
  { value: "=", label: "=" },
  { value: ">", label: ">" },
  { value: "<", label: "<" },
  { value: "LIKE", label: "Содержит" },
];

const Filters = () => {
  const [tableField, setTableField] = useState("");
  const [operation, setOperation] = useState("");
  const [userValue, setUserValue] = useState("");

  const handleTableFieldChange = useCallback((value: string) => {
    setTableField(value);
  }, []);

  const handleOperationChange = useCallback((value: string) => {
    setOperation(value);
  }, []);

  const handleChangeUserValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.currentTarget.value);
  }, []);

  const handleSearch = useCallback(() => {
    transportationsStore.setWhere(prepareWhere(tableField, operation, userValue));
    transportationsStore.getList();
  }, [tableField, operation, userValue]);

  const searchButtonDisabled = useMemo(
    () => !tableField || !operation || !userValue,
    [tableField, operation, userValue],
  );

  return (
    <div className={styles.wrapper}>
      <Select options={tableFields} onChange={handleTableFieldChange} selectWrapperClassName={styles.selectFields} />
      <Select
        options={operations}
        onChange={handleOperationChange}
        selectWrapperClassName={styles.selectOperations}
        selectLabelClassName={styles.selectOperationsLabel}
      />
      <input type={"text"} value={userValue} onChange={handleChangeUserValue} />
      <button onClick={handleSearch} disabled={searchButtonDisabled}>
        Найти
      </button>
      <button>Сбросить и найти</button>
    </div>
  );
};

export default Filters;
