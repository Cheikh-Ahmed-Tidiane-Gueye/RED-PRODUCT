import React from "react";

const CustomButton = ({ label, onClick, style, className, classNameLabel, icon }) => {
  return (
    <button
      type="submit"
      className={`btn border border-1 connectBtn ${className}`}
      onClick={onClick}
      style={style}
    >
      <p className={`connectLabel ${classNameLabel}`}>
        {icon}
        {label}
      </p>
    </button>
  );
};
export default CustomButton;
