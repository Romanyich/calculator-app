import './NumberButton.css'

type NumberButtonProps = {
  number: string;
  onClick: (value: string) => void;
  theme: string;
};

function NumberButton({ number, onClick }: NumberButtonProps) {
  return (
    <button className="white" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default NumberButton;
