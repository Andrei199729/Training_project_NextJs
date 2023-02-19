import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import Arrow from "./arrow.svg";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <Arrow
          className={cn(styles.arrow, { [styles.down]: arrow == "down" })}
        />
      )}
    </button>
  );
};
