import { css } from "@emotion/core"
import mediaQueryGen from "../../utils/mediaQueryGen"
// import global variables
import { theme } from "../layout/theme"

const [mQ768px] = mediaQueryGen([{ width: "768" }]) //mQ576px, { width: "576" },

const styles = {
  footer: css`
    background: ${theme.darkColor};
    color: dimgrey;
  `,
  content: css`
    max-width: ${theme.maxWidth};
    padding: 0 ${theme.plr};
    margin: 0 auto;
    ${mQ768px} {
      padding: 0 ${theme.plrls};
    }
  `,
  top: css`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    grid-column-gap: 25px;
    margin: 35px 0;

    ${mQ768px} {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  bottom: css`
    border-top: 1px solid aliceblue;
    padding: 2rem 0;
  `,
}

export default styles
