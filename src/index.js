import React from 'react'
import ReactDOM from 'react-dom'
import Data, { DataContext } from './Data'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
  <DataContext.Provider value={new Data()}>
    <BrowserRouter basename="/soccer-club">
      <App />
    </BrowserRouter>
  </DataContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
