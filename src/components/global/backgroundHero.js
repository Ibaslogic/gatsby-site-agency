/** @jsx jsx */
import { jsx } from "@emotion/core"

import styles from "../hero/hero.css"

import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"

const BackgroundHero = ({ img, styleClass, children }) => {
  return (
    <BackgroundImage Tag="div" fluid={img} css={styleClass}>
      <div css={styles.overlay}></div>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundHero

BackgroundHero.defaultProps = {
  styleClass: css`
    min-height: 100vh;
    width: 100%,
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
  `,
}
