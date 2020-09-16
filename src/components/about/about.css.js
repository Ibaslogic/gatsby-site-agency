import { css } from "@emotion/core"
import { theme } from "../layout/theme"

import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  main: css`
    padding: 3rem 0;
    ${mQ768px} {
      padding: 56px 0 3rem 0;
    }
  `,
  inner: css`
    max-width: 960px;
    padding: 0 ${theme.plr};
    margin: 0 auto;

    ${mQ768px} {
      padding: 3rem ${theme.plrls} 0;
    }
  `,
  section: css`
    line-height: 1.5;
    font-size: 18px;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      text-transform: uppercase;

      ${mQ768px} {
        font-size: 33px;
      }
    }

    p {
      margin: 0;
    }
  `,
}

export default styles
