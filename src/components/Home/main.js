import React, { Component } from "react"
import mainBG from "../../images/main-bg.png"
import klogo from "../../images/logo-k4ws.png"

import { Link } from "gatsby"

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
                <p>AA</p>
              </button>
            </div>
            <div>
              <div className="hero-bg">
                <img src={mainBG} alt="Man Background"/>
             
                <div className="main-text">
                
                  
                <h1>شركة خطاب</h1>
                              
                  <p> شركة خطاب ويب للبرمجيات شركة سعودية<br/>  رسمية تخدم أكثر من 5000 عميل علي <br/> مستوي العالم نتواجد في اكثر من 15 دولة</p>
                  
                  
                </div>
               
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
