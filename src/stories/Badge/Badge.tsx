import React from "react";
import clsx from "clsx";
import "./Badge.css";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Badge = ({ variant = "primary", className, children, ...props }: BadgeProps) => {
  return (
    <span className={clsx("badge", `badge-${variant}`, className)} {...props}>
      {children}
    </span>
  );
};