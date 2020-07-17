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