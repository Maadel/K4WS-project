import React, { Component } from "react"
import aboutBG from "../../images/about-bg.png"
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
                <img src={aboutBG} alt="About Backgroud"/>

                <div className="about-text fadeinn">
                  <h1>من نحن</h1>

                  <p className="about-text-p1">
                    خطاب ويب شركة استشارية متخصصة في تقنية المعلومات و تطبيق
                    البرمجيات و<br/> تطوير الشبكات، هدفنا الرئيسي هو رضا العملاء،
                    وازدهارنا قائم على تزويد عملائنا<br/> بافضل الحلول الذكية التى
                    تناسب معظم افكارهم و احتياجاتهم . تضم شركة خطاب<br/> ويب فريق عمل
                    متكامل متخصص فى تصميم و تطوير مواقع الانترنت و التسويق<br/>
                    الإلكتروني
                  </p>
                  <p className="about-text-p2">
                    وانطلاقا من خبرتنا الطويلة و تنوع الاعمال التى قامت الشركة
                    بتنفيذها<br/> على مدار اكثر من خمس سنوات ، تكون لدى فريق العمل
                    القدرة على<br/> تقديم حلول متكاملة على الإنترنت . شركة خطاب ويب
                    ليست مجرد شركة<br/> تصميم و تطوير مواقع بل هى شركة حلول متكاملة
                    حيث تقدم الشركة<br/> استشارات و حلول متكاملة لادارة و تطوير
                    المشاريع من خلال الحلول<br/> الحديثة و الافكار التسويقية المتخصصة
                    و المبتكرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
