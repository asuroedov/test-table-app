import React, { memo, useCallback, useImperativeHandle, useState } from "react";
import cn from "classnames";

import Option from "./option/Option";

import styles from "./styles.module.scss";

export type SelectRefType = { reset: () => void };
export type OptionType = { value: string; label: string };

interface SelectProps {
  options: OptionType[];
  onChange?: (value: string) => void;
  selectWrapperClassName?: string;
  selectLabelClassName?: string;
  optionClassName?: string;
  disabled?: (option: OptionType) => boolean;
}

const Select: React.ForwardRefRenderFunction<SelectRefType, SelectProps> = (props, ref) => {
  const { options, onChange, selectWrapperClassName, optionClassName, selectLabelClassName, disabled } = props;
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleSelectClick = useCallback(() => {
    setOptionsVisible((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (option: OptionType) => {
      onChange && onChange(option.value);
      setOptionsVisible(false);
      setSelectedLabel(option.label);
    },
    [onChange],
  );

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSelectedLabel("");
    },
  }));

  const optionDisabled = useCallback(
    (option: OptionType) => {
      return disabled && disabled(option);
    },
    [disabled],
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
            disabled={optionDisabled(option)}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(React.forwardRef(Select));
