import React, { FC, memo, useCallback, useState } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import Option from "./option/Option";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  selectWrapperClassName?: string;
  selectLabelClassName?: string;
  optionClassName?: string;
}

const Select: FC<SelectProps> = ({
  options,
  onChange,
  selectWrapperClassName,
  optionClassName,
  selectLabelClassName,
}) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleSelectClick = useCallback(() => {
    setOptionsVisible(true);
  }, []);

  const handleOptionClick = useCallback(
    (payload: { value: string; label: string }) => {
      onChange && onChange(payload.value);
      setOptionsVisible(false);
      setSelectedLabel(payload.label);
    },
    [onChange],
  );

  return (
    <div className={cn(styles.selectWrapper, selectWrapperClassName)}>
      <div
        onClick={handleSelectClick}
        className={cn(styles.selectLabel, { [styles.placeholder]: !selectedLabel }, selectLabelClassName)}
      >
        {selectedLabel || "Select value"}
      </div>
      <ul className={cn(styles.optionsWrapper, { [styles.active]: optionsVisible })}>
        {options.map((option, index) => (
          <Option
            key={option.value + index}
            value={option.value}
            label={option.label}
            onClick={handleOptionClick}
            className={optionClassName}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(Select);
