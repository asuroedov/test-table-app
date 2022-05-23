import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";

import TransportationTable from "../../components/tabel/TransportationTable";
import Paginator from "../../components/paginator/Paginator";

import transportationsStore from "../../mobx/transportationsStore";

import { config } from "../../utils/config";

import styles from "./styles.module.scss";

const MainPage = () => {
  const { totalCount, paginationPage } = transportationsStore;

  const handlePaginatorChange = useCallback((page: number) => {
    transportationsStore.setPage(page);
    transportationsStore.getList();
  }, []);

  return (
    <div className={styles.mainPage}>
      <TransportationTable />
      <Paginator
        totalCount={totalCount}
        pageSize={config.tableRowsLimit}
        currentPage={paginationPage}
        onChange={handlePaginatorChange}
      />
    </div>
  );
};

export default observer(MainPage);
