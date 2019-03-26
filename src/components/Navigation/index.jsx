import React from 'react';
import {Link} from 'react-router-dom';
import HeadNews from '../Header';
import logo from '../../Data/Img/Logos/Muğlaspor.png';
import { SplitButton, Image, MenuItem } from 'react-bootstrap';

const count = 3;
const timer = 2000;

// Club link menu
const dropdownLinks = ['history', 'management'];
// Teams link menu
const teamsLinks = ['football', 'basketball', 'volleyball', 'handball', 'chess'];
const directLinks = ['news', 'gallery', 'store', 'contact'];

export default ({
  match,
  history,
  scrollRef
}) => {
  // Run HeadNews component if returns false
  const isMobileDevice = _ => (
    (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ||
    window.innerWidth < 768
  )
  // Hamburger menu
  const toggleMenu = document.getElementById('toggle-1');

  // Clicked on dropdown
  const dropdownSelect = e => {
    (dropdownLinks.some(n => n === e) || e === 'club')
      ? history.push(`${match.url}/club${e !== 'club' ? '/'+e : ''}`)
      : history.push(`${match.url}/teams${e !== 'teams' ? '/'+e : ''}`);
    checkTarget('e');
  }

  // Clicked on a Nav link
  const checkTarget = (e) => {
    // Toggle hamburger menu
    toggleMenu.checked = !toggleMenu.checked;
  }
  const linkCreator = (title, index) =>
    dropdownLinks.some(n => n === title)
      ? <MenuItem
        key={index}
        eventKey={title}
        onSelect={dropdownSelect}
        >
        {title.toUpperCase()}
      </MenuItem>
      :
    teamsLinks.some(n => n === title)
      ? <MenuItem
        key={index}
        eventKey={title}
        onSelect={dropdownSelect}
        >
        {title.toUpperCase()}
      </MenuItem>
      : <Link
        key={index}
        to={`${match.url}/${title}`}
        onClick={checkTarget}
        className="no-select transform"
        >
        {title.toUpperCase()}
      </Link>;
  return (
    <div className="header">
      {isMobileDevice() || <HeadNews count={count} timer={timer} />}
      <nav>
        <div className="navigation container text-center">

          <Link id="brand" to={`${match.url}`}>
            <button name="brand" className="no-select">
              <Image responsive src={logo} />
            </button>
          </Link>

          <input type="checkbox" id="toggle-1" />
          <label htmlFor="toggle-1" className="toggle-menu transform">
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </label>
          <ul className="links transform">

            <SplitButton
              onClick={() => {
                dropdownSelect('club');
              }}
              title="CLUB"
              id="basic-nav-dropdown"
            >
              {dropdownLinks.map(linkCreator)}
            </SplitButton>

            <SplitButton
              onClick={() => {
                dropdownSelect('teams');
              }}
              title="TEAMS"
              id="basic-nav-dropdown"
            >
              {teamsLinks.map(linkCreator)}
            </SplitButton>

            {directLinks.map(linkCreator)}

          </ul>
        </div>
      </nav>
    </div>
)}
