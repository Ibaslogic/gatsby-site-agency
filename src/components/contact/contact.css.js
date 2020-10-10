import { css } from "@emotion/core"
import { theme } from "../layout/theme"

import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ576px, mQ768px] = mediaQueryGen([{ width: "576" }, { width: "768" }])

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
  heading: css`
    h1 {
      margin-bottom: 1.5rem;
      font-size: 1.7rem;
      text-transform: capitalize;

      ${mQ576px} {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }

      ${mQ768px} {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 17px;
      margin-bottom: 2rem;
    }
  `,
}

export default styles
