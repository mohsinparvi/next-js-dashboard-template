import React from "react";

const InputLabel = ({ label }: { label: string }) => {
  return (
    <label
      htmlFor="email"
      className="text-base font-medium text-dashboard-body  block"
    >
      {label}
    </label>
  );
};

export default InputLabel;
