// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const lightThemeWebsiteLogoUrl =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const darkThemeWebsiteLogoUrl =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

      const lightThemeToggleUrl =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const darkThemeToggleUrl =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav>
          <div
            className={`navbar ${
              isDarkTheme
                ? 'dark-navbar-background-theme'
                : 'light-navbar-background-theme'
            }`}
          >
            <img
              src={
                isDarkTheme ? darkThemeWebsiteLogoUrl : lightThemeWebsiteLogoUrl
              }
              alt="website logo"
              className="website-logo"
            />
            <ul className="navitems">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    isDarkTheme ? 'light-text-theme' : 'dark-text-theme'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    isDarkTheme ? 'light-text-theme' : 'dark-text-theme'
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={onClickTheme}
              className="toggle-button"
              data-testid="theme"
            >
              <img
                src={isDarkTheme ? lightThemeToggleUrl : darkThemeToggleUrl}
                alt="theme"
                className="toggle-icon"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
