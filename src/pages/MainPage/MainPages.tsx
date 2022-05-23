import React from "react";
import TransportationTable from "../../components/tabel/TransportationTable";

import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <TransportationTable />
    </div>
  );
};

export default MainPage;
