/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import Post from "../components/post"
import { graphql } from "gatsby"

//import modules
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Helmet } from "react-helmet"

import styles from "../components/blogpage/blogitems/blogItems.css"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.posts
  const { blogPostPath } = data.postPath.siteMetadata
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const [defaultLayout] = useState(true)
  return (
    <Layout>
      <SEO title={`All posts tagged as "${tag}"`} />
      <Helmet>
        <body className="tag-page" />
      </Helmet>
      <main css={styles.main} role="main">
        <div css={styles.container}>
          <div css={styles.filterPost}>
            <h3 css={styles.description}>{tagHeader}</h3>
          </div>
          <ul css={styles.list}>
            {edges.map(({ node }) => {
              const { id, timeToRead, excerpt, fields } = node
              const { slug } = fields
              const {
                title,
                datePublished,
                dateUpdated,
                featured,
              } = node.frontmatter
              return (
                <Post
                  key={id}
                  title={title}
                  posted={datePublished}
                  updated={dateUpdated}
                  time={timeToRead}
                  excerpt={excerpt}
                  featured={featured}
                  slug={slug}
                  defaultLayout={defaultLayout}
                  postPath={blogPostPath}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query($tag: String!) {
    postPath: site {
      siteMetadata {
        blogPostPath
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___dateUpdated, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
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
        }
      }
    }
  }
`
