import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ480px] = mediaQueryGen([{ width: "480" }])

const styles = {
  heading: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;
  `,
  btnContainer: css`
    a {
      padding: 10px;
      color: ${theme.pColor};
      background: transparent;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      &:hover,
      &:focus {
        color: ${theme.pColor};
        background: ${theme.skyBlue};
      }
      ${mQ480px} {
        padding: 9px 18px;
        font-size: 14px;
      }
    }
  `,
  title: css`
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 24px;
    font-size: 17px;
    margin-right: 8px;

    ${mQ480px} {
      font-size: 23px;
    }
  `,
}

export default styles
