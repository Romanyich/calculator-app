import { useState } from 'react'
import Calculator from './Calculator'
import ThemeSwitcherButton from './ThemeSwitcherButton'
import './calculator.css'

function App() {
  const [theme, setTheme] = useState<string>('light')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`App ${theme}`}>
      <ThemeSwitcherButton onClick={toggleTheme} theme={theme} />
      <Calculator />
    </div>
  )
}

export default App