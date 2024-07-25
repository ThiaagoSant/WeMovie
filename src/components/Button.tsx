import { ComponentProps } from "react";
import { Button as ButtonStyle } from "../styles/components/Button";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "success";
};

const Button = ({
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) => {
  return <ButtonStyle type={type} variant={variant} {...props} />;
};

export default Button;
