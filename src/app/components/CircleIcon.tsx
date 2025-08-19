// src/components/CircleIcon.tsx
import React from "react";
type Props = {
  children: React.ReactNode;
  bg?: string; // optional background color (e.g. '#00c300')
};

const CircleIcon = ({ children, bg = "#0A439B" }: Props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle"
      style={{
        width: "36px",
        height: "36px",
        backgroundColor: bg,
      }}
    >
      {children}
    </div>
  );
};

export default CircleIcon;
