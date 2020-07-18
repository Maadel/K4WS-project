import React, { Component } from "react"
import serviceBG from "../../images/service02.jpg"
import infoBG1 from "../../images/btn101.jpg"
import info4BG from "../../images/btn401.jpg"
import info5BG from "../../images/btn501.jpg"
import klogo from "../../images/logo-k4ws.png"
import infoArrow from "../../images/info-arrow.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
//----work pieces------------------------------
import Img from "gatsby-image"
import workInfoBG from "../../images/work-info01.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Slider from "react-slick";

export default class serviceC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-10",
      btnsCss: "service-text in",
      btn1Switch: "btn-info-off",
      btn2Switch: "btn-info-off",
      btn3Switch: "btn-info-off",
      btn4Switch: "btn-info-off",
      btn5Switch: "btn-info-off",
      btn6Switch: "btn-info-off",
      //----work pieces---------------------------
      items:props.items.edges,
      workItems: Array.from(props.items.edges ).filter(e => e.node.category ==='app').reverse().slice(0,2),
      
      workBtnsCss:"work-text in",
      workHeroSwitch:"show-content",
      workInfoSwitch:"hide-content",
      infoTextBoxCss:"work-info-text-box ",
      description:props.items.edges,
      currentNode:""
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
      ? this.setState({ navbarOpen: false, css: "hero-min col-10" })
      : this.setState({
          navbarOpen: true,
          css: "hero-full col-12",
        })
  }

  infoCloseHandler = () => {
    this.setState({
      btn1Switch: "btn-info-off",
      btn2Switch: "btn-info-off",
      btn3Switch: "btn-info-off",
      btn4Switch: "btn-info-off",
      btn5Switch: "btn-info-off",
      btn6Switch: "btn-info-off",

      btnsCss: "service-text in",
    })
  }

  btn1Handler = () => {
    this.setState({ btn1Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn2Handler = () => {
    this.setState({ btn2Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn3Handler = () => {
    this.setState({ btn3Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn4Handler = () => {
    this.setState({ btn4Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn5Handler = () => {
    this.setState({ btn5Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn6Handler = () => {
    this.setState({ btn6Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn1xxHandler = () => {
    this.setState({ infoCss: "service-info", btnsCss: "service-text fade" })
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

            <div className="toggle-btn">
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            </div>

            <div>
              <div className="hero-bg">
                <img src={serviceBG} alt="Service Backgroud"/>

                <div className={this.state.btnsCss}>
                  <div className="row">
                    <div className="col-10 service-btn-box">
                    <button
                      className="btn-eclips btn1-eclips"
                      onClick={this.btn1Handler}
                    >
                      تصميم مواقع
                      <br />  الحــراج
                    </button>
                    <button
                      className="btn-eclips btn2-eclips"
                      onClick={this.btn2Handler}
                    >
                      تصميم و برمجة
                      <br /> المتاجر الإلكترونية
                    </button>
                 
                    <button
                      className="btn-eclips btn3-eclips"
                      onClick={this.btn3Handler}
                    >
                      تصميم كافة
                      <br /> تطبيقات الجوال
                    </button>
                    <button
                      className="btn-eclips btn4-eclips"
                      onClick={this.btn4Handler}
                    >
                      إستضافة
                    </button>
                 
                    <button
                      className="btn-eclips btn5-eclips"
                      onClick={this.btn5Handler}
                    >
                      تصميم مدونة
                      <br /> إلكترونية
                    </button>
                    <button
                      className="btn-eclips btn6-eclips"
                      onClick={this.btn6Handler}
                    >
                      {" "}
                      تصميم و برمجة
                      <br /> جميع المواقع
                      <br /> الإلكترونية
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 1 xxxxxxxxxxx ------------------- */}
            <div className={"btn-info-box " + this.state.btn1Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG1} alt="Info Backgroud1"/>
                </div>
                <div className="info2-container">
                  <h1>hello</h1>
                  <p> Unfinished xxxxxx </p>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 2 تصميم وبرمجة المتاجر الإلكترونية------------------- */}
            <div className={"btn-info-box " + this.state.btn2Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG1} alt="Info Backgroud2"/>
                </div>
                <div className="info2-container">
                  <h1>تصميم وبرمجة المتاجر الإلكترونية</h1>
                  <p>
                    شركة خطاب ويب شركة تصميم متاجر الكترونية في المملكة تتمتع
                    بامكانيات
                    <br /> وخبرات كبيرة نضعها في متناول عملائنا الكرام. لماذا
                    شركة خطاب ويب أفضل شركة <br />
                    تصميم متاجر الكترونية في السعودية؟ نقدم في شركة خطاب ويب
                    خدمة تصميم
                    <br /> متاجر الكترونية في السعودية يتمتع بالعديد من المميزات
                    من بينها: اضافة متجرك
                    <br /> لمحركات البحث ,تدريب العميل وموظفيه مجاناً ,دعم فني
                    متميز ومتكامل ,توفير
                    <br /> نطاق مجاني بالاضافه الى مساحه غير محدوده وقواعد
                    بيانات غير قابلة للاختراق
                  </p>
                  {/*work pieces************************************/}
                  <div className="work-text-s">
                 
                  {/*items */}
                  <div className="row">
                  <AniLink fade to="/work">
                    <button className="more-btn"> &lt; &lt; &lt; المزيــد </button>
                  </AniLink>
                    {this.state.workItems.map(({node}, i) => {
                      return(
                        <button key={node.id} className="col-10 col-md-5 work-btn-s"
                        onClick={() => this.workBtnHandler({node})}>
                          <div className="work-img-box-s">
                            <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                          </div>
                        </button>
                        
                      )

                    })}
                  </div>

                
                </div>
              
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 3 تصميم كافة تطبيقات الجوال------------------- */}
            <div className={"btn-info-box " + this.state.btn3Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG1} alt="Info Background3"/>
                </div>
                <div className="info3-container">
                  <h1>تصميم تطبيقات الجوال</h1>
                  <p>
                    تحرص خطاب ويب على تصميم تطبيقات الجوال بشكل يسمح
                    <br /> بتحقيق الهدف منها بحيث تكون: تطبيقات متوافقة مع مختلف{" "}
                    <br />
                    أجهزة الجوال ( آيفون – أندرويد وغيرها). ,دعم فني متكامل بعد
                    <br /> تسليم التطبيق للعميل ,ربط التطبيق بموقع الويب الخاص
                    بك ,رفع <br />
                    التطبيقات على جوجل بلاي وآب ستور ,امكانية التعديل والتطوير
                    <br /> المستقبلي للتطبيق
                  </p>
                  <img src={infoArrow} alt="Info Arrow3"/>
                  <button className="btn-eclips btn2-eclips">
                    تصميم كافة <br /> تطبيقات الجوال
                  </button>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 4  اســـــــــــــــــــــــــــــــتضافة -------------*/}
            <div className={"btn-info-box " + this.state.btn4Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={info4BG} alt="Info Background4"/>
                </div>
                <div className="info4-container">
                  <h1>إستضافة مواقع</h1>
                  <p>
                    تقدم شركة خطاب ويب خدمة استضافة مواقع
                    <br /> قوية لعملائها الكرام تتميز بإمكانيات مذهلة مما
                    <br /> يضمن لموقعك الالكتروني السرعة المطلوبة
                    <br /> والاستمرارية للحفاظ على عملائك لكي تحصل على
                    <br /> نتائج متقدمة في ترتيب جوجل.لماذا تختاراستضافة
                    <br /> موقعك في شركة خطاب ويب؟
                  </p>
                  <p>
                    معلومات استضافتك متاحة في اي وقت تدعم استضافة المواقع
                    <br />
                    المقدمة من شركة خطاب ويب المنصات المختلفة بمختلف أنواع
                    <br />
                    البرمجيات ،فليس هناك داعي للقلق من عدم التمكن من تشغيل{" "}
                    <br />
                    أي برنامج، أو أي ملف مهما كان، لأن شركة خطاب ويب لديها فريق
                    <br /> عمل ودعم فني متواصل 24-7
                  </p>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 5 تصميم مدونة الكترونية */}
            <div className={"btn-info-box " + this.state.btn5Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={info5BG} alt="Info Background5"/>
                </div>
                <div className="info5-container">
                  <h1> تصميم مدونة الكترونية </h1>
                  <p>
                    إذا كنت تهدف لاطلاق الاخبار او تصميم مدونة او تصميم صحيفة
                    الكترونية او موقع
                    <br /> شخصى لعمل معين فندعوك للاطلاع على عروضنا لعمل صحيفة /
                    مدونة تساعدك <br />
                    على اطلاق صحيفتك الالكترونية او مدونتك الشخصية النطاق
                    والسيرفرات نطاق دولي
                    <br /> (.com, .net, .org, .info) باسم الشركة . مساحة تخزين
                    لموقع الشركة بحجم (5GB)
                  </p>
                  <p>
                    سعة باندويدث/نقل بيانات شهري (100GB) . اخذ نسخ احتياطية
                    للموقع لضمان عدم فقدان أي ملفات في حالة
                    <br /> الخطا او العبث بالموقع . التصميم و البرمجة و نظام
                    الموقع العام انشاء صحيفة الكترونية او مدونة الكترونية ببرمجة
                    <br /> الوردبريس العالمية . لوحه تحكم مفتوحة الصلاحيات
                    وردبريس مع تعديلها و تنسيقها حسب محتويات و متطلبات
                    <br /> الصحيفة او المدونة . تصميم واجهة احترافية و شعار متقن
                    لاسم الصحيفة او المدونة الاكترونية . عرض عدد غير محدود
                    <br /> من البروفات للوصول للشكل النهائي المتفق عليه قبل
                    اعتماده . انظمة التسجيل الالكترونى فى الموقع و قوائم بريديه
                    <br />
                    للتواصل مع زوار الصحفية او المدونة لمتابعة الأخبار . عدد لا
                    محدود من اقسام الفيديو و معارض الصور . التوافق و الدعم
                    <br /> الفنى اشهر من الدعم الفني و اصلاح الاخطاء فى حالة
                    وجودها مجانا . حماية و ضمان عدم الاختراق و متابعة الموقع
                    بشكل
                    <br /> دوري . ضمان توافق الموقع
                  </p>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 6 تصميم و برمجة جميع المواقع الالكترونية */}
            <div className={"btn-info-box " + this.state.btn6Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG1} alt="Info Background6"/>
                </div>
                <div className="info6-container">
                  <h1> تصميم مواقع إلكترونية</h1>
                  <p>
                    تتمثل خبرة خطاب ويب في تصميم موقع الكتروني في الخطوات
                    التالية: ,اتفاق<br/> مبدئي مع العميل على شكل التصميم ,اجراء كافة
                    التعديلات التي يطلبها العميل<br/> ,مراجعة الموقع والتأكد من عدم
                    وجود اي اخطاء برمجية , اختبار الموقع قبل تسليمه<br/> للعميل ,
                    تدريب العميل ومن يرغب من موظفيه على لوحة التحكم الخاصة
                    بالموقع
                  </p> <br/>
                  <img src={infoArrow} alt="Info Arrow6"/>
                  <button className="btn-eclips btn2-eclips">
                    تصميم و برمجة
                    <br /> المتاجر الإلكترونية
                  </button>
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
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={workInfoBG} alt="Info Backgroud1" className="work-in-service-info-bg"/>
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
