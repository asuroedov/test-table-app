import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface PaginatorButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const PaginatorButton: FC<PaginatorButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <div onClick={onClick} className={cn(styles.paginatorButton, { [styles.disabled]: disabled })}>
      {text}
    </div>
  );
};

export default memo(PaginatorButton);
