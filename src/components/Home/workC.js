import React, { Component } from "react"
import workBG from "../../images/work-bg.png"
import klogo from "../../images/logo-k4ws.png"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"


export default class aboutC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-10",
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-min col-10" })
      : this.setState({
          navbarOpen: true,
          css: "hero-full col-12",
        })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={this.state.css}>
          <div className="logo-k4ws">
            <Link to="/">
              <img src={klogo} alt="Logo"/>
            </Link>
            </div>
            <div className="toggle-btn">
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            </div>
            <div>
              <div className="hero-bg">
                <img src={workBG} alt="Work Backgroud"/>


                <div className="about-text">
                  <ul>
                    <li>
                      <button></button>
                    </li>
                  </ul>
                  

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
