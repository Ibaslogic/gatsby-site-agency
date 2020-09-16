import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
// import global variables
import { theme } from "../components/layout/theme"

const [mQ576px, mQ768px] = mediaQueryGen([{ width: "576" }, { width: "768" }])

const styles = {
  main: css`
    padding: 56px 0;
    ${mQ768px} {
      padding-bottom: 0;
    }
  `,
  container: css`
    max-width: 1200px;
    padding: 0px ${theme.plr};
    margin: 0px auto;
    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }

    h1 {
      font-size: 2rem;
      ${mQ576px} {
        font-size: 2.5rem;
      }
    }
  `,
}

export default styles
