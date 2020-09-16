import { css } from "@emotion/core"

import mediaQueryGen from "../../utils/mediaQueryGen"
import { theme } from "../layout/theme"

const [mQ768px] = mediaQueryGen([{ width: "768" }]) //mQ576px, { width: "576" },

const styles = {
  heading: css`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 21px;
    text-transform: capitalize;
    color: ${theme.dimWhite};
    ${mQ768px} {
      font-size: 25px;
    }
  `,
}

export default styles
