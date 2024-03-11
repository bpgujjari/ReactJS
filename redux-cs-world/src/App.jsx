import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ Provider } from "react-redux"
import Component1 from './components/FormComponent'
import store from './redux/Store'
import FormComponent from './components/FormComponent'
import AccountComponent from './components/AccountComponent'
import TypeComponent from './components/TypeComponent'

function App() {

  return (
    <>
      <Provider store={store}>
        <AccountComponent/>
        <hr />
      <FormComponent/>
      <hr />
      <TypeComponent/>
      </Provider>
    </>
  )
}

export default App
