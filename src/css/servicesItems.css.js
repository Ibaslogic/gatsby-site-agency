import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ576px, mQ768px, mQ960px, mQ1280px] = mediaQueryGen([
  { width: "576" },
  { width: "768" },
  { width: "960" },
  { width: "1280" },
])

const styles = {
  services: css`
    background: #dfdfdf; // #fafafa;
  `,
  content: css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 3rem ${theme.plr};
    ${mQ768px} {
      padding: 4rem ${theme.plrls};
    }
  `,

  list: css`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    margin: 0;
    justify-content: space-between;

    ${mQ960px} {
      &:after {
        content: "";
        flex: 0 0 32.67%;
      }
    }
  `,
  item: css`
    position: relative;
    width: 100%;
    margin-bottom: 40px;
    box-shadow: ${theme.boxShadow};
    ${mQ576px} {
      height: 300px;
    }
    ${mQ768px} {
      height: auto;
      flex: 0 0 49.5%;
    }
    ${mQ960px} {
      flex: 0 0 32.5%;
    }

    &:hover {
      > a > div > p {
        opacity: 1;
      }
    }
  `,
  img: css`
    ${mQ576px} {
      height: 300px;
    }
    ${mQ768px} {
      height: auto;
    }
  `,
  text: css`
    position: absolute;
    background: ${theme.bgColor};
    color: ${theme.mainWhite};
    padding: 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    h2 {
      font-size: 22px;
      font-weight: 400;
      position: relative;
      margin-bottom: 35px;
      &:after {
        content: "";
        position: absolute;
        width: 82px;
        height: 2px;
        bottom: -50px;
        left: 0;
        margin-bottom: 32px;
        background: ${theme.sColor};
      }
    }
  `,
  excerpt: css`
    height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: ${theme.transition2};
    ${mQ1280px} {
      height: auto;
    }
  `,
  learnMore: css`
    position: absolute;
    bottom: 20px;
    text-transform: uppercase;
    font-size: 14px;
    svg {
      font-size: 11px;
      margin-left: 7px;
    }
  `,
}

export default styles
