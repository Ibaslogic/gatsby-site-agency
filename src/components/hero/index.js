/** @jsx jsx */
import { jsx } from "@emotion/core"
import Typewriter from "typewriter-effect"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundHero from "../global/backgroundHero"
import { useSpring, animated } from "react-spring"

import styles from "./hero.css"

const Hero = ({ filename, heroContent }) => {
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
  const animeteTypeWriter = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    delay: 1000,
  })
  const animeteBtn = useSpring({
    opacity: 1,
    transform: `translate3d(0, 0, 0)`,
    from: {
      opacity: 0,
      transform: `translate3d(0, 40px,0)`,
    },
    delay: 1100,
  })

  const { headingText, descriptionText, buttonText, typeWriter } = heroContent

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "images" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === filename
  ).node

  if (!image) {
    return null
  }
  return (
    <section css={styles.bgContainer}>
      <div css={styles.content}>
        <BackgroundHero
          img={image.childImageSharp.fluid}
          styleClass={styles.backgroundImage}
        >
          <div css={styles.innerContent}>
            <animated.h1 style={animeteH}>{headingText}</animated.h1>
            <animated.h2 style={animetesubH}>{descriptionText}</animated.h2>
            <animated.div style={animeteTypeWriter} css={styles.typewritter}>
              <Typewriter
                options={{
                  strings: typeWriter,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </animated.div>

            <animated.div style={animeteBtn} css={styles.buttonContainer}>
              <Link to="/contact-us" className="btn-primary">
                {buttonText}
              </Link>
            </animated.div>
          </div>
        </BackgroundHero>
      </div>
    </section>
  )
}

export default Hero
