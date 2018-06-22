import React from "react"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return <div>
      <h2 className="logo"><u>Nathalie Pham</u></h2>
      <div className="header">
        <div className="icon" onClick={this.handleClick}><i className="fas fa-bars fa-2x"></i></div>
        <div>
          <div className="icon" onClick={this.handleClick}><i className="fab fa-twitter-square fa-2x"></i></div>
          <div className="icon" onClick={this.handleClick}><i className="fab fa-facebook-square fa-2x"></i></div>
        </div>
      </div>
      {this.state.showMenu &&
        <div>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Destinations</h3>
          <hr />
          <br />
        </div>
      }
    </div>
  }
}

export default Header
