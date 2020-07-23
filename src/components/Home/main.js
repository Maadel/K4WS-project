import React, { Component } from "react"
import mainBG from "../../images/main01.jpg"
import carousel2 from "../../images/about01.jpg"
import carousel3 from "../../images/contact01.jpg"
import carousel4 from "../../images/service01.jpg"

import klogo from "../../images/logo-k4ws.png"
import { FaBars, FaFacebook, FaLinkedin } from "react-icons/fa"
import { MdPhoneIphone} from "react-icons/md"

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
          css: "hero-min col-12 col-md-10",
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
            <div className="main-text">
              <h1> شركة خطاب</h1>
              <p>
              شركة خطاب ويب للبرمجيات شركة سعودية
رسمية تخدم أكثر من 5000 عميل علي
 مستوي العالم نتواجد في أكثر من 15 دولة
              </p>
            </div>
            <footer>
              <div className="row">
                <button className="footer-btn1">
                  
                    <FaFacebook/>

                  
                </button>
                <button className="footer-btn2">
                  
                    <FaLinkedin/>

                  
                </button>
                <button className="footer-btn3">
                  <MdPhoneIphone/>:01092773477
                </button>
              </div>
              <p>© 2020 Kkatab Web and Application services , Inc. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
