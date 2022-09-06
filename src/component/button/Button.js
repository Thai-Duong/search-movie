import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-3 mt-auto rounded-lg bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
