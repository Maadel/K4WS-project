import React, { Component } from "react"
import mainBG from "../../images/main-bg.png"
import carousel2 from "../../images/about-bg.png"
import carousel3 from "../../images/contact-bg.png"
import carousel4 from "../../images/service-bg.png"

import klogo from "../../images/logo-k4ws.png"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import Slider from "react-slick"


export default class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-full col-12",
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-full col-12" })
      : this.setState({
          navbarOpen: true,
          css: "hero-min col-10",
        })
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      arrows: true,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      LazyLoad: true,
      dotsClass:"vertical-dots"
    }
    return (
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className={this.state.css}>
            <div className="logo-k4ws">
              <Link to="/">
                <img src={klogo} alt="Logo" />
              </Link>
            </div>
            <div className="toggle-btn">
              <button onClick={this.navbarHandler}>
                <FaBars />
              </button>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                
                  <img src={mainBG} className="img-fluid w-100" alt=""/>
                </div>
                <div>
                <img src={carousel2} className="img-fluid w-100" alt=""/>
                </div>
                <div>
                <img src={carousel3} className="img-fluid w-100" alt=""/>
                </div>
                <div>
                <img src={carousel4} className="img-fluid w-100" alt=""/>
                </div>
                
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
