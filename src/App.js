import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Loading from './components/loadingIndicator'
import * as ROUTES from './constants/routes'
import './App.scss'

const pages = {
  [ROUTES.NEWS]: lazy(() => import('./components/News/index')),
  [ROUTES.CLUB]: lazy(() => import('./components/Club')),
  [ROUTES.TEAMS]: lazy(() => import('./components/Teams')),
  [ROUTES.GALLERY]: lazy(() => import('./components/Gallery')),
  [ROUTES.STORE]: lazy(() => import('./components/Store')),
  [ROUTES.CONTACT]: lazy(() => import('./components/Contact'))
}

const Page = ({ match }) => {
  const Component = pages[match.params.pageId]
  return (
    <div className="content">
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </div>
  )
}

class App extends Component {
  componentDidMount = () => {
    // Remove loading indicator 2s after component mounted
    const loader = document.querySelector('.intro-loader')
    setTimeout(() => {
      loader.parentNode.removeChild(loader)
      document.body.style = 'overflow: auto'
    }, 2000)
  }

  render() {
    const { match, history, location } = this.props
    return (
      <div id="SportClub">
        <NavBar match={match} history={history} />
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <ScrollToTop>
              <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={`${match.path}:pageId`} component={Page} />
              </Switch>
            </ScrollToTop>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
