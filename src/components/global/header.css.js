import { css } from "@emotion/core"
import mediaQueryGen from "../../utils/mediaQueryGen"
// import global variables
import { theme } from "../layout/theme"

const [mQ768px] = mediaQueryGen([{ width: "768" }]) //mQ576px, { width: "576" },

const styles = {
  pageHeader: css`
    background: white none repeat scroll 0% 0%;
    border-bottom: 1px solid ${theme.borderColor};
    position: fixed;
    inset: 0px;
    max-height: ${theme.navHeight};
    width: 100%;
    z-index: 99;
    width: 100%;

    ${mQ768px} {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent none repeat scroll 0% 0%;
      border-bottom: 1px solid transparent;
    }
  `,
  headerContent: css`
    max-width: ${theme.maxWidth};
    display: flex;
    align-items: start;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    ${mQ768px} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 ${theme.plrls};
    }
  `,
  brand: css`
    font-size: 23px;
    font-weight: 700;
    color: ${theme.sColor};
    text-transform: capitalize;
    padding: 13px 1rem;
    ${mQ768px} {
      padding: 13px 0;
    }
  `,
}

export default styles
