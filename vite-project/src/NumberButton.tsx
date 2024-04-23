import React from 'react';

interface NumberButtonProps {
  number: string;
  onClick: (value: string) => void;
  className?: string;
}

const NumberButton: React.FC<NumberButtonProps> = ({ number, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;
