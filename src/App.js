import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NavBar from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import * as ROUTES from './constants/routes'
import './App.scss'

const pages = {
  [ROUTES.NEWS]: lazy(() => import('./components/News/index')),
  [ROUTES.CLUB]: lazy(() => import('./components/Club')),
  [ROUTES.TEAMS]: lazy(() => import('./components/Teams')),
  [ROUTES.GALLERY]: lazy(() => import('./components/Gallery')),
  [ROUTES.STORE]: lazy(() => import('./components/Store')),
  [ROUTES.CONTACT]: lazy(() => import('./components/Contact'))
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

    return (
      <div id="SportClub">
        <NavBar match={match} history={history} />
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={`${ROUTES.HOME}:pageId`} component={Page} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
