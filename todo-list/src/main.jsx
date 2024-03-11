import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './components/TodoList.jsx'
import TodoList1 from './mycomponents/TodoList1.jsx'
import MyTodoList from './components/MyTodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyTodoList />
  </React.StrictMode>,
)
