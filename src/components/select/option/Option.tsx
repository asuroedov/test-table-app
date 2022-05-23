import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface OptionProps {
  value: string;
  label: string;
  className?: string;
  onClick: (payload: { value: string; label: string }) => void;
}

const Option: FC<OptionProps> = ({ value, label, onClick, className }) => {
  return (
    <li onClick={() => onClick({ value, label })} className={cn(styles.option, className)}>
      {label}
    </li>
  );
};

export default memo(Option);
