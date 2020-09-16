/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"

import FooterHeading from "../footerHeading/heading"
import styles from "./services.css"

const Services = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "services" } } }
        limit: 4
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const servicesList = data.allMarkdownRemark.edges

  return (
    <div css={styles.content}>
      <FooterHeading heading={heading} />
      <ul css={styles.list}>
        {servicesList.map(({ node }) => {
          const { id, frontmatter, fields } = node
          const { slug } = fields
          const { title } = frontmatter
          return (
            <li key={id} css={styles.item}>
              <Link to={`/services/${slug}`}>
                <span>{title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Services
