import { InputPropsTypes } from "@/types/auth-types";
import React from "react";

const Input = (Props: InputPropsTypes) => {
  return (
    <input
      className="border border-dashboard-body p-1.5 rounded w-full focus:outline-none focus:ring-1 focus:ring-dashboard-primary"
      {...Props}
    />
  );
};

export default Input;
