import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceC from "../components/Home/serviceC"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <ServiceC />
  </Layout>
)


export default ServicePage