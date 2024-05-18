import './ThemeSwitcherButton.css'
import './NumberButton'
import './NumberButton.css'

type ThemeSwitcherButtonProps = {
  onClick: () => void;
  theme: string;
};

function ThemeSwitcherButton({ onClick, theme }: ThemeSwitcherButtonProps) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    onClick()
    const collection: HTMLCollectionOf<Element> = document.getElementsByClassName('white');
    const elements: Element[] = Array.from(collection);
    
    const collectionBlack: HTMLCollectionOf<Element> = document.getElementsByClassName('black');
    const elementsBlack: Element[] = Array.from(collectionBlack);

    for (let k of elements) {
        k.className = 'black'
      }

    for (let k of elementsBlack) {
      k.className = 'white'
    }
  }
 
  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
}

export default ThemeSwitcherButton;