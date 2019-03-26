import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Data, { DataContext } from './Data'
import NavBar from './components/Navigation'
import Home from './components/Home'
import NewsAll from './components/News'
import Club from './components/Club'
import Teams from './components/Teams'
import Gallery from './components/Gallery'
import Store from './components/Store'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.scss'

const pages = {
  news: NewsAll,
  club: Club,
  teams: Teams,
  gallery: Gallery,
  store: Store,
  contact: Contact
  // admin: lazy(() => import('../Admin'))
}

const Page = ({ match }) => {
  const Component = pages[match.params.pageId]
  return (
    <div className="content">
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  )
}

class App extends Component {
  render() {
    const { match, history, location } = this.props
    console.log(this.props)
    return (
      <DataContext.Provider value={new Data()}>
        <div id="App">
          <NavBar match={match} history={history} />
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch>
                <Route exact path={match.path} component={Home} />
                <Route path={`${match.path}/:pageId`} component={Page} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </DataContext.Provider>
    )
  }
}

export default withRouter(App)
