import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ768px] = mediaQueryGen([
  //   { width: "300" },
  //   { width: "480" },
  { width: "768" },
  //   { width: "960" },
])

const styles = {
  inner: css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 2rem ${theme.plr};
    ${mQ768px} {
      padding: 2rem ${theme.plrls};
    }
  `,
  heading: css`
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 35px;
  `,
  list: css`
    display: flex;
    flex-direction: column;
  `,
  item: css`
    cursor: pointer;
    border: 1px solid ${theme.skyBorder};
    border-left: 6px solid ${theme.sColor};
    margin-bottom: 20px;
    background: none;
  `,
  faqTop: css`
    padding: 15px 0;
    font-weight: 700;
    position: relative;
  `,
  toggle: css`
    position: absolute;
    right: 16px;
    top: 16px;
    color: ${theme.lightGrey2};
  `,
  quest: css`
    font-weight: 700;
    text-align: left;
    p {
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 0;
      padding: 0px ${theme.plr};
      ${mQ768px} {
        padding: 0rem ${theme.plrls};
      }
    }
  `,
  noShowAnswer: css`
    text-align: left;
    height: 0;
    overflow: hidden;
    p {
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 0;
      padding: 0px ${theme.plr} 20px;
      ${mQ768px} {
        padding: 0rem ${theme.plrls} 20px;
      }
    }
  `,
  showAnswer: css`
    text-align: left;
    height: 100%;
    p {
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 0;
      padding: 0px ${theme.plr} 20px;

      ${mQ768px} {
        padding: 0rem ${theme.plrls} 20px;
      }
    }
  `,
}

export default styles
