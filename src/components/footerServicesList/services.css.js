import { css } from "@emotion/core"

import { theme } from "../layout/theme"

const styles = {
  content: css`
    a {
      color: dimgrey;
      transition: ${theme.transition};
      &:hover {
        color: ${theme.dimWhite};
      }
    }
  `,

  list: css`
    list-style: none;
    margin: 0;
  `,
  item: css`
    font-size: 16px;
    margin: 0 0 10px 0;
  `,
}

export default styles
