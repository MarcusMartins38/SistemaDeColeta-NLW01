import React from "react";

interface IButtonProps {
  children: any;
  openModal: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, openModal }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          openModal();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
