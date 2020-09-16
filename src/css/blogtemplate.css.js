import { css } from "@emotion/core"

// import global variables
import { theme } from "../components/layout/theme"
import mediaQueryGen from "../utils/mediaQueryGen"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  entryHeader: css`
    position: relative;
    width: 100%;
    // height: 80vh;
  `,
  headerImage: css`
    height: auto;
    width: 100%;
    min-height: 250px;
    max-height: 750px;
    ${mQ768px} {
      height: 80vh;
    }
  `,
  contentWrapper: css`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 1em;
    color: ${theme.mainWhite};
  `,
  overlay: css`
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4) none repeat scroll 0% 0%;
  `,
  innerContent: css`
    padding: 0 ${theme.plr};
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    ${mQ768px} {
      padding: 0 ${theme.plrls};
    }
  `,
  title: css`
    font-size: 1.3rem;
    margin-bottom: 10px;
    ${mQ768px} {
      font-size: 1.9rem;
    }
  `,
  meta: css`
    font-size: 14px;
    ${mQ768px} {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
    }
  `,
  posted: css`
    span {
      margin-right: 6px;
    }
  `,
  read: css`
    svg {
      margin-bottom: -2px;
    }
  `,
  edit: css`
    margin-top: 10px;
    ${mQ768px} {
      margin-top: 0px;
    }
    a {
      color: ${theme.mainWhite};
      svg {
        margin-bottom: -2px;
      }
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  `,
  entryContent: css`
    padding: 2rem ${theme.plr};
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    ${mQ768px} {
      padding: 3rem ${theme.plrls};
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  `,
  primary: css`
    ${mQ768px} {
      flex: 0 1 60%;
      margin-left: 2rem;
    }
  `,
  secondary: css`
    margin-top: 3rem;
    ${mQ768px} {
      margin: 0px;
      flex: 0 1 18%;
    }
  `,
  secondaryContent: css`
    ${mQ768px} {
      top: 106px;
      position: sticky;
    }
  `,
  tags: css`
    ${mQ768px} {
      margin-bottom: 1.5rem;
    }
  `,
  navigateContainer: css`
    margin-top: 2rem;
    ${mQ768px} {
      margin-bottom: 1.5rem;
    }
  `,
  share: css`
    ${mQ768px} {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        top: 0px;
        background: ${theme.skyBorder};
      }
    }
  `,
}

export default styles
