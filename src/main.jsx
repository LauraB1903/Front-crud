import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContexGlobalProvider from './context/ContexGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexGlobalProvider>
      <App />
    </ContexGlobalProvider>
  </React.StrictMode>,
)
