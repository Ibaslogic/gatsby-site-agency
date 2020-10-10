import { css } from "@emotion/core"

// import global variables
import { theme } from "../layout/theme"
import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  bgContainer: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,
  content: css`
    position: absolute;
    width: 100%;
    inset: 0px;
    color: ${theme.mainWhite};
  `,
  overlay: css`
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    background: ${theme.bgColorHero};
  `,
  innerContent: css`
    z-index: 1;
    display: flex;
    padding: 0 ${theme.plr};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${theme.maxWidth};
    margin: -56px auto 0;
    text-align: center;
    ${mQ768px} {
      margin-top: 0;
      padding: 0 ${theme.plrls};
    }

    h1 {
      font-size: 2rem;
      text-transform: uppercase;
      ${mQ768px} {
        font-size: 3rem;
      }
    }
    h2 {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 2rem;
      ${mQ768px} {
        font-size: 1.3rem;
      }
    }
  `,
  backgroundImage: css`
    height: 100vh;
    max-width: 100vw;
    width: 100%,
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
  `,
  typewritter: css`
    font-size: 16px;
    margin-bottom: 25px;
    font-weight: 400;
  `,
}

export default styles
