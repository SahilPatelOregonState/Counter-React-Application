import React,{useState} from 'react'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  const [theme,setTheme] = useState('red')
  return(
    <>
    <ThemeContext.Provider value = {{backgroundColor: theme}}>
    Hooks Counter
      <CounterHooks initialCount = {10}/>
    </ThemeContext.Provider>
    <button onClick={() => setTheme(prevTheme =>{return prevTheme ==='red'?'blue':'red'}) }>toggle-color-change</button>
    </>
  )
  
  
}

export default App;
