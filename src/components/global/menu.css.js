import { css } from "@emotion/core"
// import global variables
import { theme } from "../layout/theme.js"
import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }]) //mQ576px, { width: "576" },

const styles = {
  globalMenu: css`
    // Site Menu
    .menuNav {
      width: 100%;
      ${mQ768px} {
        width: auto;
      }
    }

    .btnContainer {
      position: absolute;
      z-index: 999;
      top: 1px;
      right: 0px;
      ${mQ768px} {
        display: none;
      }
    }
    .menuBtn {
      position: relative;
      cursor: pointer;
      width: 64px;
      height: 57px;
      background: none;
      border: none;
      outline: none;

      &.is-opened {
        .btnline {
          &:nth-of-type(1) {
            transform: rotate(45deg);
            top: 29px;
          }
          &:nth-of-type(2) {
            transform: rotate(-45deg);
            bottom: 26px;
          }
          &:nth-of-type(3) {
            opacity: 0;
          }
        }
      }
    }

    .btnline {
      position: absolute;
      display: block;
      background: ${theme.darkColor};
      width: 28px;
      right: 18px;
      height: 2px;
      transition: ${theme.transition};

      &:nth-of-type(1) {
        transform: rotate(0deg);
        top: 23px;
      }
      &:nth-of-type(2) {
        transform: rotate(0deg);
        bottom: 25px;
      }
      &:nth-of-type(3) {
        transform: rotate(0deg);
        bottom: 18px;
      }
    }

    .menu-list {
      margin: 0;
      background: #fff;
      list-style: none;
      margin-top: -2px;
      position: fixed;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: ${theme.transition};

      &.show-nav {
        height: 100%;
      }

      ${mQ768px} {
        display: flex;
        background: transparent;
        margin-top: 0px;
        padding-top: 0px;
        position: static;
        visibility: visible;
        height: 100%;
      }

      li {
        margin: 0 20px 1.03rem;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.4rem;

        &:nth-of-type(1) {
          margin-top: 50px;
          ${mQ768px} {
            margin-top: 0px;
          }
        }
        ${mQ768px} {
          margin-bottom: 0px;
          margin-right: 0px;
        }
        a {
          display: block;
          position: relative;
          ${mQ768px} {
            color: #fff;
            padding: 10px 0;
            font-size: 0.85rem;

            &:after {
              content: "";
              position: absolute;
              display: block;
              left: 0;
              right: 0;
              bottom: 6px;
              height: 1px;
              background: ${theme.sColor};
              opacity: 0;
              transition: ${theme.transition2};
            }

            &:hover,
            &:focus,
            &:focus {
              &:after {
                opacity: 1;
              }
            }
          }
          // Menu Active Link
          &.activeNavItem {
            color: ${theme.sColor};
            ${mQ768px} {
              color: ${theme.sColor};
              position: relative;
              &:after {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  `,
}
export default styles
