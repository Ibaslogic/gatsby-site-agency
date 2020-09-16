/** @jsx jsx */
import { jsx } from "@emotion/core"
import styles from "../../css/tools.css"
import Img from "gatsby-image"

const Tools = ({ tools, heading, description }) => {
  return (
    <section css={styles.toolsSection}>
      <div css={styles.headingContainer}>
        <div css={styles.headingContent}>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div css={styles.tools}>
        <ul css={styles.list}>
          {tools.map(
            ({ image, title }) =>
              image && (
                <li css={styles.item} key={title}>
                  <Img fixed={image.childImageSharp.fixed} alt={title} />
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  )
}
export default Tools
