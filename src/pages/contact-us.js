import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import ContactContent from "../components/contact"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Get in touch with us" />
      <Helmet>
        <body className="contact-page" />
      </Helmet>
      <ContactContent data={data} />
    </Layout>
  )
}
export default Contact

export const query = graphql`
  query {
    contactData: site {
      siteMetadata {
        contactPage {
          heading
          subHeading
        }
      }
    }
  }
`
