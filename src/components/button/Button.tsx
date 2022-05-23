import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={cn(styles.button, { [styles.disabled]: props.disabled }, className)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default memo(Button);
