/** @jsx jsx */
import { jsx } from "@emotion/core"
import { FaTimes } from "react-icons/fa"

import styles from "./backdrop.css"

const Backdrop = ({ id, handleModal }) => {
  return (
    <div
      css={styles.backdrop}
      onClick={() => handleModal(id)}
      onKeyDown={() => handleModal(id)}
      role="button"
      tabIndex="0"
    >
      <button css={styles.close}>
        <FaTimes />
      </button>
    </div>
  )
}
export default Backdrop
