import { css } from "@emotion/core"
import mediaQueryGen from "../../../utils/mediaQueryGen"
// import global variables
import { theme } from "../../layout/theme"

const [mQ576px, mQ768px, mQ960px] = mediaQueryGen([
  { width: "576" },
  { width: "768" },
  { width: "960" },
]) //mQ576px, { width: "576" },

const styles = {
  main: css`
    padding-top: 56px;
  `,
  container: css`
    max-width: 1200px;
    padding: 0px ${theme.plr};
    margin: 0px auto;
    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }
  `,
  filterContainer: css`
    position: relative;
    background: ${theme.skyBlue};
    display: flex;
    justify-content: space-between;
    border: 1px solid ${theme.skyBorder};

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  `,
  filter: css`
    button {
      text-transform: capitalize;
      color: ${theme.lightDark};
      padding: 7px 10px 7px 10px;
      transition: ${theme.transition};

      &:hover,
      &:focus {
        color: ${theme.pColor};
      }
      ${mQ576px} {
        padding: 13px 30px 13px 15px;
        // margin-right: 30px;
      }
    }
  `,
  selected: css`
    color: ${theme.pColor} !important;
  `,
  description: css`
    margin: 0;
  `,
  switchLayout: css`
    display: none;

    ${mQ960px} {
      display: block;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    button {
      color: ${theme.lightGrey2};
    }
  `,

  list: css`
    width: 100%;
    margin: 0px auto;
    list-style: none;
    padding: 3rem 0 0;
    ${mQ768px} {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
    ${mQ960px} {
      &:after {
        content: "";
        flex: 0 0 32.67%;
      }
    }
  `,
  list2: css`
    width: 100%;
    margin: 0px auto;
    list-style: none;
    padding: 3rem 0 0;
    ${mQ960px} {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  `,
}

export default styles
