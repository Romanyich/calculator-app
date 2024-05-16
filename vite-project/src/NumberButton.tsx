import './NumberButton.css'

type NumberButtonProps = {
  number: string;
  onClick: (value: string) => void;
  theme: string;
};

function NumberButton({ number, onClick, theme }: NumberButtonProps) {
  const buttonStyle = {
    color: theme === 'light' ? '#000000' : '#ffffff',
    backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
  }

  return (
    <button style={buttonStyle} className="white" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default NumberButton;
