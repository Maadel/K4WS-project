import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactC from "../components/Home/ContactC"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactC />
  </Layout>
)


export default ContactPage