import { css } from "@emotion/core"
import { theme } from "../layout/theme"

const styles = {
  backdrop: css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${theme.bgColor2};
    z-index: 100;
  `,
  close: css`
    position: absolute;
    top: 0.75em;
    right: 0.75em;
    cursor: pointer;
    color: ${theme.mainWhite};
    background: transparent;
    border: none;

    &:hover {
      color: ${theme.lightGrey2};
    }
  `,
}

export default styles
