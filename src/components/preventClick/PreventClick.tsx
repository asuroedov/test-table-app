import React, { FC, memo } from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.scss";

interface PreventClickProps {
  visible: boolean;
}

const PreventClick: FC<PreventClickProps> = ({ visible }) => {
  if (!visible) return <></>;
  return ReactDOM.createPortal(
    <div className={styles.wrapper} onClick={(event) => event.stopPropagation()} />,
    document.body,
  );
};

export default memo(PreventClick);
