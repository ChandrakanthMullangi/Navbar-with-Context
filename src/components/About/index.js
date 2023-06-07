// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <div className="about-container">
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const lightThemeHomeUrl =
          'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        const darkThemeHomeUrl =
          'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

        return (
          <div
            className={`about ${
              isDarkTheme ? 'dark-background-theme' : 'light-background-theme'
            }`}
          >
            <img
              src={isDarkTheme ? darkThemeHomeUrl : lightThemeHomeUrl}
              alt="about"
              className="about-image"
            />
            <h1
              className={`about-heading ${
                isDarkTheme ? 'light-text-theme' : 'dark-text-theme'
              }`}
            >
              About
            </h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default About
