import React from "react"
import { graphql } from "gatsby"



import SEO from "../components/seo"
import WorkC from "../components/Home/workC"

const WorkPage = ({ data }) => (
  <>
    <SEO title="Services" />
    <WorkC items={data.workData}/>
  </>
)


export const query = graphql`
{
  imageOne: file(relativePath: { eq: "harag.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageTwo: file(relativePath: { eq: "halal.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
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


export default WorkPage