import { css } from "@emotion/core"
import { theme } from "../layout/theme"

import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ576px, mQ768px] = mediaQueryGen([{ width: "576" }, { width: "768" }])

const styles = {
  main: css`
    padding: 3rem 0;
    ${mQ768px} {
      padding: 56px 0 3rem 0;
    }
  `,

  inner: css`
    max-width: 960px;
    padding: 0 ${theme.plr};
    margin: 0 auto;

    ${mQ768px} {
      padding: 3rem ${theme.plrls} 0;
    }
  `,
  heading: css`
    h1 {
      margin-bottom: 1.5rem;
      font-size: 1.7rem;
      text-transform: capitalize;

      ${mQ576px} {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }

      ${mQ768px} {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 17px;
      margin-bottom: 2rem;
    }
  `,
  list: css`
    margin: 0 0 2rem;
    list-style: none;
    display: grid;
    grid-gap: 15px;

    ${mQ576px} {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }

    li {
      > * {
        width: 100%;
        font-size: 15px;
        outline: none;
        padding: 10px;
        line-height: 1.66667;
        border: 1px solid ${theme.lightDark};

        &::placeholder,
        &:-moz-placeholder {
          font-size: 16px;
          color: inherit;
          text-transform: capitalize;
          font-weight: 600;
        }

        &:invalid {
          box-shadow: none;
        }

        &:focus {
          border-color: ${theme.borderColor};
          box-shadow: ${theme.boxShadow};
        }
      }

      ${mQ576px} {
        flex: 0 0 49%;
      }
    }
  `,
  textareaItem: css`
    textarea {
      height: 200px;
      resize: vertical;
    }

    ${mQ576px} {
      grid-column: 1/3;
    }
  `,
  btnContainer: css`
    button {
      color: ${theme.mainWhite};
      font-size: 12px;
      font-weight: 700;

      &:hover,
      &:focus {
        color: ${theme.pColor};
      }

      ${mQ768px} {
        font-size: 16px;
      }
    }
  `,
}

export default styles
