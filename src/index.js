import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import Data, { DataContext } from './Data'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

// Init google analytics
ReactGA.initialize(process.env.REACT_APP_GOOGLE_KEY)
// Listen route changes to send google analytics
const history = createBrowserHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

ReactDOM.render(
  <DataContext.Provider value={new Data()}>
    <BrowserRouter basename="/soccer-club" history={history}>
      <App />
    </BrowserRouter>
  </DataContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
