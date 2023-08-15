import React from 'react';

interface FormProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    customClass?: string;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, customClass }) => {

  return <form onSubmit={onSubmit} className={`${customClass}`}>{children}</form>;
};

export default Form;
