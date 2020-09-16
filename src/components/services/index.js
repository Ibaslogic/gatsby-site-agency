/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

import styles from "../../css/services.css"

const Services = ({ items }) => {
  const {
    heading,
    subHeading,
  } = items.servicesData.siteMetadata.servicesPage.listingPage
  const servicesList = items.servicesPosts.edges
  const itemsNum = items.servicesPosts.edges.length

  const animeteH = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0, -80px,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0, 0,0)`,
    },
  })
  const animetesubH = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    delay: 800,
  })

  return (
    <main css={styles.main} role="main">
      <div css={styles.container}>
        <header css={styles.header}>
          <animated.h1 style={animeteH}>{heading}</animated.h1>
          <animated.p style={animetesubH}>{subHeading}</animated.p>
        </header>
        {itemsNum > 0 ? (
          <ul css={styles.list}>
            {servicesList.map(({ node }) => {
              const { id, frontmatter, fields } = node
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
                        />
                      )}
                    </div>
                    <div css={styles.heading}>
                      <h2>{title}</h2>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <p>There are no services to display...please add items</p>
        )}
      </div>
    </main>
  )
}
export default Services
