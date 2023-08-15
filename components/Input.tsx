'use client';

import React, { useState } from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  customClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  value: any;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  customClass,
  required,
  onChange,
  value
}) => {

  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`bg-blue-50 border-blue-200 border-2 p-2 rounded active:border-blue-400  focus-visible:outline-none w-full ${customClass}`}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
