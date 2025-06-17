import React from "react";
import "./Avatar.css";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg";
}

// stories/Avatar/Avatar.tsx
export function Avatar({ src, alt = "", size = "md", ...props }: AvatarProps) {
  return <img src={src} alt={alt} className={`avatar avatar-${size}`} {...props} />;
}