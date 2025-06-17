import React from "react";
import clsx from "clsx";
import "./Alert.css";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning";
}

export const Alert = ({ variant = "success", className, children, ...props }: AlertProps) => {
  return (
    <div className={clsx("alert", `alert-${variant}`, className)} {...props}>
      {children}
    </div>
  );
};