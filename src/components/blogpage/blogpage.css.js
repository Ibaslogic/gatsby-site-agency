import { css } from "@emotion/core"
// import global variables
import { theme } from "../layout/theme"

import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  list: css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: wrap;
    text-transform: capitalize;
    li {
      margin-right: 10px;
      margin-bottom: 10px;

      a {
        color: ${theme.pColor};
        border: 1px solid ${theme.skyBorder};
        padding: 3px 5px;
        border-radius: 2px;
        background: ${theme.tagBtn};
        font-size: 13px;

        &:hover {
          background: ${theme.btnHover};
        }
      }
    }
  `,
  navigatePosts: css`
    a {
      color: ${theme.pColor};
      margin-right: 15px;
      margin-bottom: 10px;
      display: inline-block;
      transition: ${theme.transition};

      &:hover {
        color: ${theme.lightDark};
      }
    }
    h3 {
      margin: 0;
    }
  `,
  arrow: css`
    font-size: 10px;
  `,
  previous: css`
    margin-left: 7px;
  `,
  next: css`
    margin-right: 7px;
  `,
  social: css`
    padding-top: 1.5rem;
  `,
  heading: css`
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
  `,
  socialList: css`
    display: flex;
    list-style: none;
    margin: 0;

    ${mQ768px} {
      flex-direction: column;
    }

    li {
      margin: 10px 22px 10px 0;
      ${mQ768px} {
        margin: 15px 0;
      }

      a {
        font-size: 18px;
        padding: 5px 7px 2px;
        border: 1px solid ${theme.skyBorder};
        border-radius: 50%;
        color: ${theme.lightGrey};

        &:hover {
          color: ${theme.darkColor};
          border-color: ${theme.darkColor};
        }
      }
    }
  `,
}

export default styles
