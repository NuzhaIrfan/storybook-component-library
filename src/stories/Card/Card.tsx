import React from "react";
import clsx from "clsx";
import "./Card.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined";
}

export const Card = ({ variant = "default", className, children, ...props }: CardProps) => {
  return (
    <div className={clsx("card", `card-${variant}`, className)} {...props}>
      {children}
    </div>
  );
};