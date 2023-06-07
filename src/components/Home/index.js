// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const lightThemeHomeUrl =
          'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

        const darkThemeHomeUrl =
          'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

        return (
          <div
            className={`home ${
              isDarkTheme ? 'dark-background-theme' : 'light-background-theme'
            }`}
          >
            <img
              src={isDarkTheme ? darkThemeHomeUrl : lightThemeHomeUrl}
              alt="home"
              className="home-image"
            />
            <h1
              className={`home-heading  ${
                isDarkTheme ? 'light-text-theme' : 'dark-text-theme'
              }`}
            >
              Home
            </h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default Home
