import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  font = "m",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.paragraph14]: font == "s",
        [styles.paragraph16]: font == "m",
        [styles.paragraph18]: font == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
