import { css } from "@emotion/core"
import mediaQueryGen from "../../utils/mediaQueryGen"
import { theme } from "../layout/theme"

const [mQ768px] = mediaQueryGen([{ width: "768" }])

const styles = {
  main: css`
    ${mQ768px} {
      padding-top: 56px;
    }
  `,
  container: css`
    max-width: ${theme.maxWidth};
    padding: 3rem ${theme.plr};
    margin: 0px auto;

    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }
  `,
  header: css`
    margin-bottom: 40px;
  `,
  list: css`
    list-style: none;
    margin: 0;
  `,
  item: css`
    margin-bottom: 3rem;
    padding: 20px;
    box-shadow: ${theme.boxShadow};
    &:last-child {
      margin-bottom: 0;
    }
    ${mQ768px} {
      display: flex;
      flex-direction: row;
      padding: 30px;
    }
  `,
  infoContainer: css`
    text-align: center;
    margin-bottom: 1.3rem;
    ${mQ768px} {
      text-align: left;
      width: 260px;
      margin-right: 10px;
    }
  `,
  img: css`
    width: 50px;
    height: 54px;
    border-radius: 50%;
    box-shadow: ${theme.boxShadow};
  `,
  clientInfo: css`
    line-height: 26px;
  `,
  name: css`
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
  contentContainer: css`
    position: relative;
    ${mQ768px} {
      flex: 1;
    }
  `,
  quote: css`
    font-size: 40px;
    color: ${theme.skyBorder};
    position: absolute;
    z-index: -1;
    top: -24px;
  `,
  content: css`
    line-height: 27px;
  `,

  bottomInfo: css`
    margin-top: 2rem;
    color: ${theme.lightGrey};
    font-size: 12px;
  `,
}

export default styles
