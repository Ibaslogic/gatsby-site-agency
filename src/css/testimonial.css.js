import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ480px, mQ576px, mQ768px, mQ960px] = mediaQueryGen([
  //   { width: "300" },
  { width: "480" },
  { width: "576" },
  { width: "768" },
  { width: "960" },
  // { width: "1280" },
])

const styles = {
  testimonial: css`
    // background: #1b1b1b;
  `,
  content: css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 3rem ${theme.plr};
    ${mQ768px} {
      padding: 4rem ${theme.plrls};
    }
  `,
  heading: css`
    margin-bottom: 30px;
    p {
      margin: 0;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 24px;
      font-size: 17px;
      margin-right: 5px;

      ${mQ480px} {
        font-size: 23px;
      }
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
    background: ${theme.vLightSky};
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
  `,
  inner: css`
    padding: 20px;
  `,
  quote: css`
    font-size: 40px;
    color: ${theme.skyBorder};
  `,
  topText: css`
    display: flex;
    justify-content: space-between;
  `,
  clientInfo: css`
    display: flex;
  `,
  name: css`
    text-align: right;
    font-weight: 600;
    line-height: 12px;
    margin: 11px 0 0;
    span {
      color: ${theme.lightGrey};
      display: block;
      margin-top: 9px;
      font-size: 12px;
    }
  `,
  imgContainer: css`
    margin-left: 10px;
  `,
  img: css`
    width: 50px;
    height: 54px;
    border-radius: 50%;
    box-shadow: ${theme.boxShadow};
  `,
  excerpt: css`
    margin: 1.3rem 0;
    padding-bottom: 50px;
  `,
  linkText: css`
    position: absolute;
    bottom: 20px;
    background: transparent;
    border: none;
    text-transform: capitalize;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: ${theme.lightGrey};
    }
  `,
}

export default styles
