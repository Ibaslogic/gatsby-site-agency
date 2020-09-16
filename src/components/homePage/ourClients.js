/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import styles from "../../css/ourClients.css"

const OurClients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0px,0)" : "translate3d(0, 50px,0)",
  })

  const data = useStaticQuery(graphql`
    query {
      clientsdata: site {
        siteMetadata {
          homePage {
            ourClients {
              heading
              subHeading
              images {
                image
              }
            }
          }
        }
      }
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "images" } }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fixed(height: 62) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const {
    heading,
    subHeading,
    images,
  } = data.clientsdata.siteMetadata.homePage.ourClients

  const clientImages = images.map(img => img.image)

  clientImages.forEach((element, index, arr) => {
    arr[index] = data.placeholderImage.edges.find(
      ({ node }) => node.relativePath === element
    )
  })

  const renderedImages = []

  clientImages.forEach((element, index, arr) => {
    if (typeof arr[index] !== "undefined") {
      renderedImages.push(element)
    }
  })

  return (
    <section css={styles.ourClients}>
      <div css={styles.content}>
        <animated.div ref={ref} css={styles.headingContainer} style={props}>
          <h2 css={styles.heading}>{heading}</h2>
          <p css={styles.subHeading}>{subHeading}</p>
        </animated.div>

        <ul css={styles.list}>
          {renderedImages.map(({ node }) => (
            <li css={styles.item} key={node.id}>
              <Img fixed={node.childImageSharp.fixed} alt={node.relativePath} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default OurClients
