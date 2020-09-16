import React from "react"
import { graphql } from "gatsby"

//import modules
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogItems from "../components/blogpage/blogitems"

import { Helmet } from "react-helmet"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" description="Read our step-by-step guides." />
      <Helmet>
        <body className="blog-page" />
      </Helmet>
      <BlogItems items={data} />
    </Layout>
  )
}
export default Blog

export const query = graphql`
  query {
    postPath: site {
      siteMetadata {
        blogPostPath
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { fields: frontmatter___dateUpdated, order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            datePublished(formatString: "MMMM Do, YYYY")
            dateUpdated(formatString: "MMMM Do, YYYY")
            featured {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`
