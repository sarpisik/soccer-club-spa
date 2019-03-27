import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { SplitButton, Image, MenuItem } from 'react-bootstrap'
import HeadNews from '../Header/index'
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

  // Run HeadNews component if returns false
  isMobileDevice = () =>
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1 ||
    window.innerWidth < 768

  // Clicked on a Nav link
  checkTarget = () => {
    // Toggle hamburger menu
    const toggleMenu = document.getElementById('toggle-1')
    toggleMenu.checked = !toggleMenu.checked
  }

  // Clicked on dropdown
  dropdownSelect = e => {
    const { history, match } = this.props

    this.dropdownLinks.some(n => n === e) || e === 'club'
      ? history.push(`${match.url}club${e !== 'club' ? '/' + e : ''}`)
      : history.push(`${match.url}teams${e !== 'teams' ? '/' + e : ''}`)

    this.checkTarget()
  }

  render() {
    const { match } = this.props
    return (
      <div className="header">
        {this.isMobileDevice() || <HeadNews count={count} timer={timer} />}
        <nav>
          <div className="navigation container text-center">
            <Link id="brand" to={`${match.url}`}>
              <button name="brand" className="no-select">
                <Image responsive src={logo} />
              </button>
            </Link>

            <input type="checkbox" id="toggle-1" />
            <label htmlFor="toggle-1" className="toggle-menu transform">
              <span className="glyphicon glyphicon-menu-hamburger" />
            </label>
            <ul className="links transform">
              <SplitButton
                onClick={() => {
                  this.dropdownSelect('club')
                }}
                title="CLUB"
                id="basic-nav-dropdown">
                {this.dropdownLinks.map(this.linkCreator)}
              </SplitButton>

              <SplitButton
                onClick={() => {
                  this.dropdownSelect('teams')
                }}
                title="TEAMS"
                id="basic-nav-dropdown">
                {this.teamsLinks.map(this.linkCreator)}
              </SplitButton>

              {this.directLinks.map(this.linkCreator)}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
