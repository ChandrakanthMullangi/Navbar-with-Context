import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div
            className={`not-found ${
              isDarkTheme ? 'dark-background-theme' : 'light-background-theme'
            }`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1
              className={`not-found-heading ${
                isDarkTheme ? 'light-text-theme' : 'dark-text-theme'
              }`}
            >
              Lost Your Way?
            </h1>
            <p className="not-found-message">
              {' '}
              We cannot seem to find the page you are looking for
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default NotFound
