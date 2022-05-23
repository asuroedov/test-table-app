import React, { useCallback, useMemo, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import Select, { OptionType, SelectRefType } from "../select/Select";
import Button from "../button/Button";

import transportationsStore from "../../mobx/transportationsStore";

import { isNumericColumn } from "../../utils/isNumericColumn";
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

  const tableFieldRef = useRef<SelectRefType>(null);
  const operationRef = useRef<SelectRefType>(null);

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
    transportationsStore.setPage(1);
    transportationsStore.setWhere(prepareWhere(tableField, operation, userValue));
    transportationsStore.getList();
  }, [tableField, operation, userValue]);

  const searchButtonDisabled = useMemo(
    () => !tableField || !operation || !userValue,
    [tableField, operation, userValue],
  );

  const handleResetAndSearch = useCallback(() => {
    setTableField("");
    setOperation("");
    setUserValue("");
    tableFieldRef.current?.reset();
    operationRef.current?.reset();

    transportationsStore.setPage(1);
    transportationsStore.setWhere("");
    transportationsStore.getList();
  }, []);

  const inputType = useMemo(() => {
    return isNumericColumn(tableField) ? "number" : "text";
  }, [tableField]);

  const disablesForTableFieldSelect = useCallback(
    (option: OptionType) => {
      return operation === "LIKE" && (isNumericColumn(option.value) || option.value === "date");
    },
    [operation],
  );

  const disablesForOperationSelect = useCallback(
    (option: OptionType) => {
      return (isNumericColumn(tableField) || tableField === "date") && option.value === "LIKE";
    },
    [tableField],
  );

  return (
    <div className={styles.wrapper}>
      <Select
        ref={tableFieldRef}
        options={tableFields}
        onChange={handleTableFieldChange}
        selectWrapperClassName={styles.selectFields}
        disabled={disablesForTableFieldSelect}
      />
      <Select
        ref={operationRef}
        options={operations}
        onChange={handleOperationChange}
        selectWrapperClassName={styles.selectOperations}
        selectLabelClassName={styles.selectOperationsLabel}
        disabled={disablesForOperationSelect}
      />
      <input type={inputType} value={userValue} onChange={handleChangeUserValue} />
      <Button onClick={handleSearch} disabled={searchButtonDisabled} className={styles.searchBtn}>
        Найти
      </Button>
      <Button onClick={handleResetAndSearch}>Сбросить и найти</Button>
    </div>
  );
};

export default observer(Filters);
