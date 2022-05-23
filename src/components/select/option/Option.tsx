import React, { FC, memo, useCallback } from "react";
import cn from "classnames";

import { OptionType } from "../Select";

import styles from "./styles.module.scss";

interface OptionProps {
  value: string;
  label: string;
  className?: string;
  disabled?: boolean;
  onClick: (option: OptionType) => void;
}

const Option: FC<OptionProps> = ({ value, label, onClick, disabled, className }) => {
  const handleOptionClick = useCallback(() => {
    onClick && !disabled && onClick({ value, label });
  }, [onClick, disabled, label, value]);

  return (
    <li onClick={handleOptionClick} className={cn(styles.option, { [styles.disabled]: disabled }, className)}>
      {label}
    </li>
  );
};

export default memo(Option);
