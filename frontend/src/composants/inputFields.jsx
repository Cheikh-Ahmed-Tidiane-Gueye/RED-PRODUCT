// inputFields.jsx
import React from "react";

const inputFields = ({
  type,
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  label,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        aria-describedby={`${id}Help`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {label}
    </>
  );
};
export default inputFields;