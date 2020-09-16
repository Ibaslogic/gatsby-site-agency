/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Heading from "../homePage/heading"
import Modal from "../modal"
import Backdrop from "../backdrop"
import { FaQuoteLeft } from "react-icons/fa"

import styles from "../../css/testimonial.css"

const Testimonial = () => {
  const [modalOpen, setModalOpen] = useState({})

  const handleModal = id => {
    setModalOpen(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const data = useStaticQuery(graphql`
    query {
      testimonialData: site {
        siteMetadata {
          homePage {
            testimonial {
              headingText
              linkText
              buttonText
              buttonTextLinkTo
            }
          }
        }
      }
      testimonialPosts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "testimonial" } } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              title
              photo {
                childImageSharp {
                  fixed(height: 52) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            excerpt
            html
          }
        }
      }
    }
  `)

  const testimonialList = data.testimonialPosts.edges
  const {
    headingText,
    linkText,
    buttonText,
    buttonTextLinkTo,
  } = data.testimonialData.siteMetadata.homePage.testimonial

  return (
    <section css={styles.testimonial}>
      <div css={styles.content}>
        <Heading
          headingText={headingText}
          buttonText={buttonText}
          link={buttonTextLinkTo}
        />
        <ul css={styles.list}>
          {testimonialList.map(({ node }) => {
            const { id, frontmatter, html, excerpt } = node
            const { name, title, photo } = frontmatter
            return (
              <li key={id} css={styles.item}>
                <div>
                  {modalOpen[id] && (
                    <Backdrop id={id} handleModal={handleModal} />
                  )}
                  {modalOpen[id] && (
                    <Modal
                      name={name}
                      title={title}
                      photo={photo}
                      content={html}
                    />
                  )}
                </div>
                <div css={styles.inner}>
                  <div css={styles.topText}>
                    <div css={styles.quote}>
                      <FaQuoteLeft />
                    </div>
                    <div css={styles.clientInfo}>
                      <p css={styles.name}>
                        {name} <br /> <span>{title}</span>
                      </p>
                      <div css={styles.imgContainer}>
                        {photo && (
                          <Img
                            css={styles.img}
                            fixed={photo.childImageSharp.fixed}
                            alt={title}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <p css={styles.excerpt}>{excerpt}</p>
                  <button css={styles.linkText} onClick={() => handleModal(id)}>
                    {linkText}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Testimonial
