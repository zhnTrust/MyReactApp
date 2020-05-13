import { Link } from "gatsby"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    console.log(scrollTop)
    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    } else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.hasScrolled ? "Header HeaderScrolled" : "Header"
          }
        >
          <div className="HeaderGroup">
            <Link to="/">
              <img src={require("../images/avatar.png")} alt="" width="30" />
            </Link>
            <Link to="/courses">Courses</Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/wrokshops">Workshops</Link>
            <Link to="/buy">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
