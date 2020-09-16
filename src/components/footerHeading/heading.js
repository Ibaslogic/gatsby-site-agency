/** @jsx jsx */
import { jsx } from "@emotion/core"
import styles from "./heading.css"

const FooterHeading = ({ heading }) => {
  return <h2 css={styles.heading}>{heading}</h2>
}
export default FooterHeading
