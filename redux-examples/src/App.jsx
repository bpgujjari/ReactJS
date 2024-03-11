import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from "react-redux"
import store from './reduxStore/Srore'
import BookContainer from './components/BookContainer'
import Comp1 from './components/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Comp1/>
      </Provider>
    </>
  )
}

export default App
