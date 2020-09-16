/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Heading from "../homePage/heading"
import { FaArrowRight } from "react-icons/fa"
import styles from "../../css/servicesItems.css"

const ServicesItems = () => {
  const data = useStaticQuery(graphql`
    query {
      servicesData: site {
        siteMetadata {
          homePage {
            services {
              arrowText
              headingText
              buttonText
              buttonTextLinkTo
            }
          }
        }
      }
      servicesPosts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "services" } } }
        limit: 3
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              cover {
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
  `)

  const servicesList = data.servicesPosts.edges
  const {
    arrowText,
    headingText,
    buttonText,
    buttonTextLinkTo,
  } = data.servicesData.siteMetadata.homePage.services

  return (
    <section css={styles.services}>
      <div css={styles.content}>
        <Heading
          headingText={headingText}
          buttonText={buttonText}
          link={buttonTextLinkTo}
        />
        <ul css={styles.list}>
          {servicesList.map(({ node }) => {
            const { id, frontmatter, fields, excerpt } = node
            const { slug } = fields
            const { title, cover } = frontmatter
            return (
              <li key={id} css={styles.item}>
                <Link to={`/services/${slug}`}>
                  <div css={styles.imgContainer}>
                    {cover && (
                      <Img
                        css={styles.img}
                        fluid={cover.childImageSharp.fluid}
                        alt={title}
                        backgroundColor="#eaeaea"
                      />
                    )}
                  </div>
                  <div css={styles.text}>
                    <h2>{title}</h2>
                    <p css={styles.excerpt}>{excerpt}</p>
                    <div css={styles.learnMore}>
                      {arrowText} <FaArrowRight />
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default ServicesItems
