/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

import styles from "../../css/heading.css"

const Heading = ({ headingText, buttonText, link }) => {
  return (
    <div css={styles.heading}>
      <h2 css={styles.title}>{headingText}</h2>
      <div css={styles.btnContainer}>
        <Link className="btn-primary" to={link}>
          {buttonText}
        </Link>
      </div>
    </div>
  )
}
export default Heading
