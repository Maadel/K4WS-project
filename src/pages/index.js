import React from "react"
//import { Link, graphql, StaticQuery } from "gatsby"


import SEO from "../components/seo"

import Main from "../components/Home/main"


const IndexPage = ({ data }) => (
  <>
    <SEO title="Main" />
    <Main />
 </>
 
)

export const query = graphql`
  {
    imgOne: file(relativePath: { eq: "main4.png" }) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage