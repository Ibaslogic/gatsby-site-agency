import { css } from "@emotion/core"
import { theme } from "../layout/theme"

import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  container: css`
    border-top: 1px solid ${theme.lightBorderColor};
  `,

  inner: css`
    display: flex;
    padding: 1.5rem 0;
    flex-direction: column;

    ${mQ768px} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `,
  designBy: css`
    margin: 0 0 20px 0;
    a {
      color: ${theme.dimGrey};
      text-decoration: underline;
    }
    ${mQ768px} {
      margin: 0;
    }
  `,
  list: css`
    display: flex;
    list-style: none;
    margin: 0;
  `,
  item: css`
    margin: 0 16px 0 0;
    font-size: 22px;
    ${mQ768px} {
      font-size: 18px;
      margin: 0 0 0 16px;
    }

    a {
      color: ${theme.dimGrey};
      transition: ${theme.transition};

      &:hover {
        color: ${theme.dimWhite};
      }
    }
  `,
}

export default styles
