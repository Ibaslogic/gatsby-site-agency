/** @jsx jsx */
import { jsx } from "@emotion/core"
import styles from "./blogItems.css"

import { FaThLarge, FaTh } from "react-icons/fa"

const FilterPosts = ({
  categories,
  handleItems,
  handleToggle,
  selectedItem,
  defaultLayout,
}) => {
  return (
    <div css={styles.filterContainer}>
      <div css={styles.filter}>
        {categories.map((category, index) => {
          return (
            <button
              css={selectedItem === category ? styles.selected : ""}
              type="button"
              key={index}
              onClick={() => handleItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div css={styles.switchLayout}>
        <button onClick={handleToggle}>
          {defaultLayout ? <FaThLarge /> : <FaTh />}
        </button>
      </div>
    </div>
  )
}
export default FilterPosts
