import React, { memo, useCallback, useImperativeHandle, useState } from "react";
import cn from "classnames";

import Option from "./option/Option";

import styles from "./styles.module.scss";

export type SelectRefType = { reset: () => void };

interface SelectProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  selectWrapperClassName?: string;
  selectLabelClassName?: string;
  optionClassName?: string;
}

const Select: React.ForwardRefRenderFunction<SelectRefType, SelectProps> = (props, ref) => {
  const { options, onChange, selectWrapperClassName, optionClassName, selectLabelClassName } = props;
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

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSelectedLabel("");
    },
  }));

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

export default memo(React.forwardRef(Select));
