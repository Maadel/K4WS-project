import React, { Component } from "react"
import contactBG from "../../images/contact01.jpg"
import klogo from "../../images/logo-k4ws.png"
import { FaBars, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "gatsby"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"


function Map() {
  return <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat:  31.04520, lng:  31.394776 }}
  > 
  <Marker position={{lat: 31.045200, lng:  31.394600}}/>
  
  
  </GoogleMap> ;
}

const WrappedMap =withScriptjs(withGoogleMap(Map));

export default class contactC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-12 col-md-10",
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-min col-12 col-md-10" })
      : this.setState({
          navbarOpen: true,
          css: "hero-full col-12",
        })
  }
  mapHandler = () => {
    this.state.mapOpen
      ? this.setState({ mapOpen: false, mapSwitch: "map-box d-none" })
      : this.setState({
          mapOpen: true,
          mapSwitch: "map-box d-block",
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
            <button onClick={this.mapHandler}>
              <FaMapMarkerAlt />
              </button>
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            </div>
            <div>
              <div className="hero-bg">
                <img src={contactBG} alt="Contact Background"/>

                <div className="contact-text fadeinn">
                  <h1>اتصل بنا</h1>

                  <form action="https://formspree.io/5min4coffee@gmail.com" method="POST">
                    <label  htmlFor="name">الإسم</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      required></input>
                    <label  htmlFor="email">البريد الالكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required></input>
                    <label  htmlFor="subject">موضوع الرسالة</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder=""
                      required></input>
                    <label  htmlFor="massage">نص الرسالة</label>
                    <textarea
                      id="massage"
                      name="massage"
                      placeholder=""
                      className="form-textarea"
                      
                      required></textarea>
                    
                    <input type="submit" value="إرسال"/>
                    
                  </form>
                  <div className="padding-filler"></div>
 
                </div>
                <div className={this.state.mapSwitch}>
                  <WrappedMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsGwp19k_0lr31Hnyos-OPLdJ9FwTO6k4&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
