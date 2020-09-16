/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

import { slugify } from "../../utils/slugify"
import styles from "./blogpage.css"

const TagLinks = ({ tags }) => {
  return (
    <ul css={styles.list}>
      {tags.map((tag, index) => (
        <li key={index}>
          <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  )
}
export default TagLinks
