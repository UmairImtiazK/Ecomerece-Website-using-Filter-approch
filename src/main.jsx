import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseContext from './assets/Content/UseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseContext>
    <App />
    </UseContext>
  </React.StrictMode>,
)
