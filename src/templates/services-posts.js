/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Tools from "../components/tools"
import Faq from "../components/faq"
import SEO from "../components/seo"
import styles from "../css/serviceTemplate.css"

import BackgroundHero from "../components/global/backgroundHero"

const ServicesPost = ({ data }) => {
  const {
    title,
    description,
    tools,
    cover,
    faq,
  } = data.servicesContent.frontmatter

  const { buttonText } = data.heroContent.siteMetadata.servicesPage.hero_content

  const image = cover && cover.childImageSharp.fluid
  const { excerpt } = data.servicesContent

  return (
    <Layout>
      <SEO
        title={title}
        excerpt={excerpt}
        description={description}
        image={image}
      />

      <main className="" role="main">
        <article className="single-post">
          <div css={styles.entryHeader}>
            {cover && (
              <BackgroundHero img={image}>
                <div css={styles.innerContent}>
                  <h1 css={styles.title}>{title}</h1>
                  <div css={styles.descriptionContainer}>
                    <p css={styles.description}>{description}</p>
                    <div css={styles.buttonContainer}>
                      <Link to="/contact-us" className="btn-primary">
                        {buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </BackgroundHero>
            )}
          </div>
          <div css={styles.entryContent}>
            <div
              css={styles.primary}
              dangerouslySetInnerHTML={{ __html: data.servicesContent.html }}
            ></div>
            <Tools
              tools={tools}
              heading="Technologies we use"
              description="We employ the proven combination of the latest and classic trusted technologies, having the following technology stack as our basis"
            />
            <Faq faq={faq} heading="FAQ" />
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default ServicesPost

export const query = graphql`
  query($slug: String!) {
    heroContent: site {
      siteMetadata {
        servicesPage {
          hero_content {
            buttonText
          }
        }
      }
    }
    servicesContent: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 300)
      frontmatter {
        title
        description
        tools {
          title
          image {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
        faq {
          id
          question
          answer
        }
        cover {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`
