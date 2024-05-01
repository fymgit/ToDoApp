import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import {DateContextProvider} from './context/DateContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateContextProvider>
      <App/>
    </DateContextProvider>
  </React.StrictMode>,
)
