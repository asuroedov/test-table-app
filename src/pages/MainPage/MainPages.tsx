import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";

import TransportationTable from "../../components/tabel/TransportationTable";
import Paginator from "../../components/paginator/Paginator";
import HeaderLoader from "../../components/headerLoader/HeaderLoader";
import PreventClick from "../../components/preventClick/PreventClick";
import Filters from "../../components/filters/Filters";

import transportationsStore from "../../mobx/transportationsStore";

import { config } from "../../utils/config";

import styles from "./styles.module.scss";

const MainPage = () => {
  const { totalCount, afterRequestFilters, isLoading } = transportationsStore;

  const handlePaginatorChange = useCallback((page: number) => {
    transportationsStore.setPage(page);
    transportationsStore.getList();
  }, []);

  return (
    <div className={styles.mainPage}>
      <Filters />
      <TransportationTable />
      <Paginator
        totalCount={totalCount}
        pageSize={config.tableRowsLimit}
        currentPage={afterRequestFilters.page}
        onChange={handlePaginatorChange}
      />
      <HeaderLoader isLoading={isLoading} />
      <PreventClick visible={isLoading} />
    </div>
  );
};

export default observer(MainPage);
