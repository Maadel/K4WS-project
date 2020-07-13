import React, { Component } from "react"
//import workBG from "../../images/work-bg.png"
import klogo from "../../images/logo-k4ws.png"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import Img from "gatsby-image"
import workInfoBG from "../../images/work-info-bg.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Slider from "react-slick";
//import { node } from "prop-types"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["الكل", ...categories];
  return categories;
}
export default class aboutC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "work-hero-min col-10",
      items:props.items.edges,
      workItems:props.items.edges,
      categories: getCategories(props.items.edges),
      btn1Switch: "btn-info-off",
      workBtnsCss:"work-text in",
      workHeroSwitch:"show-content",
      workInfoSwitch:"hide-content",
      infoTextBoxCss:"work-info-text-box ",

      description:props.items.edges,
      currentNode:""
    }

  }

  handleItems = (category) => {
    let tempItems = [...this.state.items];
    if (category === "الكل") {
      this.setState(() => {
        return {workItems:tempItems}
      })
    }
    else {
      let items = tempItems.filter(({node}) => node.category === category);
      this.setState(()=>{
        return {workItems:items}
      })
    }
  }

  workBtnHandler = ({node}) => {
    this.setState({ workHeroSwitch:"hide-content",workInfoSwitch:"show-content",infoTextBoxCss:"work-info-text-box fadeinn", currentNode:node})
  }

  workCloseHandler = () => {
    this.setState({workHeroSwitch:"show-content",infoTextBoxCss:"work-info-text-box ", workInfoSwitch:"hide-content"})
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "work-hero-min col-10" })
      : this.setState({
          navbarOpen: true,
          css: "work-hero-full col-12",
        })
  }
  render() {
    var settings = {
      fade: true,
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
      <div>
      <div className={"container-fluid hero-scale " + this.state.workHeroSwitch}>
        <div className="row">
          <div className={this.state.css}>
          <div className="logo-k4ws">
            <Link to="/">
              <img src={klogo} alt="Logo"/>
            </Link>
            </div>
            <div className="work-toggle-btn">
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            </div>
            <div>
              <div className="hero-bg">
                {/*<img src={workBG} alt="Work Backgroud"/>*/}


                <div className={this.state.workBtnsCss}>
                  {/*categories */}
                  <div className="row mb-5">
                    <div className="col-10 mx-auto text-center">
                      {this.state.categories.map((category, index) => {
                        return (<button type="button"
                         key={index}
                          className="btn filter-btn"
                           onClick={() => {this.handleItems(category)}}>{category}</button>)
                      })}
                    </div>
                  </div>
                  {/*items */}
                  <div className="row">
                    {this.state.workItems.map(({node}, i) => {
                      return(
                        <button key={node.id} className="col-10 col-md-5 work-btn"
                        onClick={() => this.workBtnHandler({node})}>
                          <div>
                            <Img fluid={node.workIcon.fluid} className="work-img fadeinn"/>
                          </div>
                        </button>
                        
                      )

                    })}
                  </div>

                
                </div>
              </div>
            </div>
            <div className={"btn-info-box " + this.state.btn1Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.workCloseHandler}>
                  X
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={workInfoBG} alt="Info Backgroud1"/>
                </div>
                <div className="info2-container">
                  <h1>hello</h1>
                  <p key={this.state.currentNode.id}>{this.state.currentNode.description1}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"container-fluid  work-info-box " + this.state.workInfoSwitch}>
        <div className="row">
          <div className={"overflow-hidden " + this.state.css}>
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
                {/*<img src={workBG} alt="Work Backgroud"/>*/}


       
              </div>
            </div>
            <div className="btn-info-box btn-info-on">
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.workCloseHandler}>
                  X
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={workInfoBG} alt="Info Backgroud1"/>
                </div>
                <div className="work-info-container">
                  
                  <div className={this.state.infoTextBoxCss}>
                    <div className="work-info-logo">
                    <Img fluid={this.state.currentNode?.logo?.fluid == null ? "s" : this.state.currentNode.logo.fluid} className=""/>
                    </div>
                    <div className="work-info-p1box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.description1}</p>
                    </div>
                    <div className="work-info-p2box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.description2}</p>
                    </div>
                    <div className="order-box">
                    <AniLink fade to="/contact">
                     <button className="order-now-btn"> اطلب الان</button>
                    </AniLink>
                    </div>
                  </div>
                  <div className="work-info-image-box">
                  <Slider {...settings}>
                <div>
                
                <Img fluid={this.state.currentNode?.image1?.fluid == null ? "s" : this.state.currentNode.image1.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.image2?.fluid == null ? "s" : this.state.currentNode.image2.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.image3?.fluid == null ? "s" : this.state.currentNode.image3.fluid} className="work-info-image fadeinn"/>
                </div>
              
                
              </Slider>
                  {/*<Img fluid={this.state.currentNode?.image?.fluid == null ? "s" : this.state.currentNode.image.fluid} className="work-info-image fadeinn"/>*/}
            
                  {/*<Img fluid={this.state.currentNode.image.fluid} className="work-info-image"/>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
