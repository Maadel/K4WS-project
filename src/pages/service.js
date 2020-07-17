import React from "react"



import SEO from "../components/seo"
import ServiceC from "../components/Home/serviceC"

const ServicePage = ({ data }) => (
  <>
    <SEO title="Services" />
    <ServiceC items={data.workData}/>
  </>
)



export const query2 = graphql`
{

  workData:allContentfulOurWork{
    edges{
      node{
        id
        title
        workIcon{
          fluid(maxWidth: 500, quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        logo{
          fluid(maxWidth:500, quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        image{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        image1{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        image2{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        image3{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        description1
        description2
        category
      }
    }
  }
}

`


export default ServicePage