import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { SplitButton, Image, MenuItem } from 'react-bootstrap'
import HeadNews from '../Header/index'
import smoothScrollTo from '../smoothScroll'
import logo from '../../Data/Img/Logos/Muğlaspor.png'
import * as ROUTES from '../../constants/routes'

const count = 3
const timer = 2000

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props)

    // Main links
    this.directLinks = [
      ROUTES.NEWS,
      ROUTES.GALLERY,
      ROUTES.STORE,
      ROUTES.CONTACT
    ]

    // Club sub links
    this.dropdownLinks = [ROUTES.HISTORY, ROUTES.MANAGEMENT]

    // Teams sub links
    this.teamsLinks = [
      ROUTES.FOOTBALL,
      ROUTES.BASKETBALL,
      ROUTES.VOLLEYBALL,
      ROUTES.HANDBALL,
      ROUTES.CHESS
    ]

    // this.lockScroll = false
    this.checkBox = React.createRef()

    this.isMobile =
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1 ||
      window.innerWidth < 768
  }

  componentDidMount = () => {
    this.checkBox.current.addEventListener('change', this.toggleScrollLock)
  }

  componentWillUnmount = () => {
    this.checkBox.current.removeEventListener('change', this.toggleScrollLock)
  }

  linkCreator = (title, index) => {
    const { match } = this.props

    return this.dropdownLinks.some(n => n === title) ? (
      <MenuItem key={index} eventKey={title} onSelect={this.dropdownSelect}>
        {title.toUpperCase()}
      </MenuItem>
    ) : this.teamsLinks.some(n => n === title) ? (
      <MenuItem key={index} eventKey={title} onSelect={this.dropdownSelect}>
        {title.toUpperCase()}
      </MenuItem>
    ) : (
      <Link
        key={index}
        to={`${match.url}${title}`}
        onClick={this.checkTarget}
        className="no-select transform">
        {title.toUpperCase()}
      </Link>
    )
  }
  // Dropdown Click Event
  dropdownSelect = e => {
    const { history, match } = this.props

    // If this is Club dropdown, navigate to club page.
    // Else, navigate to teams page.
    this.dropdownLinks.some(n => n === e) || e === 'club'
      ? history.push(`${match.url}club${e !== 'club' ? '/' + e : ''}`)
      : history.push(`${match.url}teams${e !== 'teams' ? '/' + e : ''}`)

    this.checkTarget()
  }
  // Brand Click Event
  onBrandClick = () => {
    const { history } = this.props
    const scrollTarget = document.querySelector('.content-home')

    // If the current location is not homepage, navigate to home page.
    // Else, smooth scroll to top.
    history.location.pathname !== ROUTES.HOME
      ? history.push(ROUTES.HOME)
      : smoothScrollTo(scrollTarget, 500)
  }

  // Mobile Browser Events
  checkTarget = () => {
    // If this is a mobile browser, toggle menu list.
    this.checkBox.current.checked = !this.checkBox.current.checked
    this.isMobile && this.toggleScrollLock()
  }
  toggleScrollLock = e => {
    // If menu list opened, lock scroll on the background.
    // Else, unlock scroll.
    document.body.style = `overflow: ${
      this.checkBox.current.checked ? 'hidden' : 'auto'
    }`
  }

  render() {
    return (
      <div className="header">
        {/* HEADER-TOP NEWS */}
        {this.isMobile || <HeadNews count={count} timer={timer} />}

        {/* NAVIGATION BAR */}
        <nav>
          <div className="navigation container text-center">
            {/* BRAND LOGO */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="brand" onClick={this.onBrandClick}>
              <button name="brand" className="no-select">
                <Image responsive src={logo} />
              </button>
            </a>

            {/* MENU BUTTON */}
            <input ref={this.checkBox} type="checkbox" id="toggle-1" />
            <label htmlFor="toggle-1" className="toggle-menu transform">
              <span className="glyphicon glyphicon-menu-hamburger" />
            </label>

            {/* NAV LINKS */}
            <ul className="links transform">
              {/* CLUB DROPDOWN */}
              <SplitButton
                onClick={() => {
                  this.dropdownSelect('club')
                }}
                title="CLUB"
                id="basic-nav-dropdown">
                {this.dropdownLinks.map(this.linkCreator)}
              </SplitButton>
              {/* TEAMS DROPDOWN */}
              <SplitButton
                onClick={() => {
                  this.dropdownSelect('teams')
                }}
                title="TEAMS"
                id="basic-nav-dropdown">
                {this.teamsLinks.map(this.linkCreator)}
              </SplitButton>
              {/* MAIN LINKS */}
              {this.directLinks.map(this.linkCreator)}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
