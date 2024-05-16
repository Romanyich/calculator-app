import './ThemeSwitcherButton.css'

type ThemeSwitcherButtonProps = {
  onClick: () => void;
  theme: string;
};

function ThemeSwitcherButton({ onClick, theme }: ThemeSwitcherButtonProps) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    onClick();
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
}

export default ThemeSwitcherButton;

