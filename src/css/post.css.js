import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
// import global variables
import { theme } from "../components/layout/theme"

const [mQ576px, mQ768px, mQ960px, mQ1280px] = mediaQueryGen([
  { width: "576" },
  { width: "768" },
  { width: "960" },
  { width: "1280" },
])

const styles = {
  listItem: css`
    position: relative;
    margin-bottom: 3rem;
    box-shadow: ${theme.boxShadow};

    ${mQ768px} {
      flex: 0 0 49.5%;
    }
    ${mQ960px} {
      flex: 0 0 32.67%;
    }
  `,
  listItem2: css`
    position: relative;
    margin-bottom: 3rem;
    box-shadow: ${theme.boxShadow};

    ${mQ960px} {
      flex: 0 0 49.5%;
      margin-bottom: 15px;
    }

    > a > article > div {
      position: absolute;
      bottom: 0px;
      right: 0;
      left: 0;
      background: ${theme.bgColor};
      color: #fff;
    }
  `,
  overlay: css`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    ${mQ1280px} {
      background: ${theme.bgColor};
      transition: ${theme.transition};

      z-index: 1;
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }
  `,
  excerpt: css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
    color: #fff;
    height: 0px;
    overflow: hidden;
    ${mQ1280px} {
      height: 100%;
    }
  `,
  entryHeader: css``,
  image: css`
    ${mQ576px} {
      height: 250px;
    }
    ${mQ768px} {
      height: auto;
    }
  `,
  content: css`
    padding: 10px 20px;
    color: ${theme.pColor};
    ${mQ768px} {
      padding-bottom: 2rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      font-weight: 700;
      line-height: 1.33;
    }
  `,
  meta: css`
    font-size: 14px;
    ${mQ768px} {
      position: absolute;
      bottom: 10px;
    }
  `,
  divider: css`
  position relative;
    &:after {
      content: "";
      display: block;
      width: 2px;
      height: 2px;
      background: ${theme.pColor};
      position: absolute;
      top: 10px;
      left: 0px;
    }
  `,
  time: css`
    margin-left: 3px;
  `,
}

export default styles
