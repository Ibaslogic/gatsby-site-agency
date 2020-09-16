import { css } from "@emotion/core"
import mediaQueryGen from "../../utils/mediaQueryGen"
import { theme } from "../layout/theme"

const [mQ768px] = mediaQueryGen([
  //   { width: "300" },
  //   { width: "480" },
  { width: "768" },
])

const styles = {
  modal: css`
    width: 90%;
    background: ${theme.mainWhite};
    box-shadow: ${theme.boxShadow};
    position: fixed;
    top: 20vh;
    left: 5%;
    z-index: 101;
    ${mQ768px} {
      width: 50rem;
      left: calc((100% - 50rem) / 2);
    }
  `,
  content: css`
    padding: 2rem ${theme.plr};
    line-height: 25px;
    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }
  `,
  header: css`
    margin-bottom: 20px;
    display: flex;
  `,
  img: css`
    width: 50px;
    height: 54px;
    border-radius: 50%;
    box-shadow: ${theme.boxShadow};
  `,
  name: css`
    font-weight: 600;
    line-height: 12px;
    margin: 11px 0 0 10px;
    span {
      color: ${theme.lightGrey};
      display: block;
      margin-top: 9px;
      font-size: 12px;
    }
  `,
}

export default styles
