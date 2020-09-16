/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import styles from "./blogpage.css"

const NavigatePosts = ({ prev, next, blogPostPath }) => {
  console.log(prev, next)
  return (
    <div css={styles.navigatePosts}>
      {prev && (
        <Link to={`${blogPostPath}/${prev.url}`}>
          <span css={styles.arrow}>
            <FaArrowLeft />
          </span>
          <span css={styles.previous}>Previous</span>
        </Link>
      )}
      {next && (
        <Link to={`${blogPostPath}/${next.url}`}>
          <span css={styles.next}>Next</span>
          <span css={styles.arrow}>
            <FaArrowRight />
          </span>
        </Link>
      )}
    </div>
  )
}
export default NavigatePosts
