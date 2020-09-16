/** @jsx jsx */
import { jsx } from "@emotion/core"
import Img from "gatsby-image"

import styles from "./modal.css"

const Modal = ({ name, title, photo, content }) => {
  return (
    <article css={styles.modal}>
      <div css={styles.content}>
        <header css={styles.header}>
          {photo && (
            <Img
              css={styles.img}
              fixed={photo.childImageSharp.fixed}
              alt={title}
            />
          )}
          <p css={styles.name}>
            {name} <br /> <span>{title}</span>
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </article>
  )
}
export default Modal
