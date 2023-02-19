import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  font?: "s" | "m" | "l";
  children: ReactNode;
}
