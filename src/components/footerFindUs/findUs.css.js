import { css } from "@emotion/core"
import { theme } from "../layout/theme"

const styles = {
  content: css``,
  icon: css`
    font-size: 12px;
  `,
  inTouch: css`
    margin-bottom: 10px;
    span {
      margin-right: 5px;
    }
    a {
      color: ${theme.dimGrey};
      text-decoration: underline;
    }
  `,
}

export default styles
