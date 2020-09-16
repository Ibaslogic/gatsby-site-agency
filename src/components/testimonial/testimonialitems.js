/** @jsx jsx */
import { jsx } from "@emotion/core"
import Img from "gatsby-image"
import { FaQuoteLeft } from "react-icons/fa"
import { useSpring, animated } from "react-spring"
import styles from "./testimonialitems.css"

const TestimonialItems = ({ items }) => {
  const {
    heading,
    subHeading,
  } = items.testimonialData.siteMetadata.testimonialPage
  const testimonialList = items.testimonialPosts.edges
  const itemsNum = items.testimonialPosts.edges.length

  const animeteH = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0, -40px,0)`,
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
            {testimonialList.map(({ node }) => {
              const { id, frontmatter, html } = node
              const { name, title, date, photo } = frontmatter
              return (
                <li key={id} css={styles.item}>
                  <div css={styles.infoContainer}>
                    {photo && (
                      <Img
                        css={styles.img}
                        fixed={photo.childImageSharp.fixed}
                        alt={title}
                      />
                    )}

                    <div css={styles.clientInfo}>
                      <p css={styles.name}>
                        {name} <br /> <span>{title}</span>
                      </p>
                    </div>
                  </div>
                  <div css={styles.contentContainer}>
                    <div css={styles.quote}>
                      <FaQuoteLeft />
                    </div>
                    <div
                      css={styles.content}
                      dangerouslySetInnerHTML={{ __html: html }}
                    ></div>
                    <div css={styles.bottomInfo}>{date}</div>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <p>There are no testimonial to display...please add items</p>
        )}
      </div>
    </main>
  )
}
export default TestimonialItems
