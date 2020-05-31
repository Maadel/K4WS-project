import React from "react"
import { graphql } from "gatsby"



import SEO from "../components/seo"
import WorkC from "../components/Home/workC"

const WorkPage = ({ data }) => (
  <>
    <SEO title="Services" />
    <WorkC />
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
}

`


export default WorkPage