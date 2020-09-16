/** @jsx jsx */
import { jsx } from "@emotion/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from "../css/post.css"

const Post = ({
  title,
  updated,
  posted,
  time,
  excerpt,
  slug,
  // fluid,
  featured,
  defaultLayout,
  postPath,
}) => {
  return (
    <li css={defaultLayout ? styles.listItem : styles.listItem2}>
      <Link to={`${postPath}/${slug}`}>
        <div css={styles.overlay}>
          <div css={styles.excerpt}>
            <p>{excerpt}</p>
          </div>
        </div>
        <article css={styles.contentArticle}>
          <header css={styles.entryHeader}>
            {featured && (
              <Img
                css={styles.image}
                fluid={featured.childImageSharp.fluid}
                alt={slug}
                backgroundColor="#eaeaea"
              />
            )}
          </header>
          <div css={styles.content}>
            <h2 css={styles.entryTitle}>{title}</h2>
            <div css={styles.meta}>
              {updated === posted ? " Posted " : "Updated"} on{" "}
              <span> {updated} </span>
              <span css={styles.divider}></span>
              <span css={styles.time}> {time} min read </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}
export default Post
