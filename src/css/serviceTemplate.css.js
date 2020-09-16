import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ300px, mQ480px, mQ768px, mQ960px] = mediaQueryGen([
  { width: "300" },
  { width: "480" },
  { width: "768" },
  { width: "960" },
])

const styles = {
  innerContent: css`
    z-index: 1;
    display: flex;
    padding: 0 ${theme.plr};
    flex-direction: column;
    max-width: calc(${theme.maxWidth} - 200px);
    margin: 0 auto;
    color: ${theme.mainWhite};
    text-align: left;

    ${mQ768px} {
      padding: 0 ${theme.plrls};
    }
    ${mQ960px} {
      flex-direction: row;
      flex: 1;
    }
  `,
  title: css`
    font-size: 2rem;
    margin-bottom: 30px;
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 400;
    ${mQ300px} {
      font-size: 2.3rem;
    }
    ${mQ480px} {
      font-size: 3.5rem;
    }
    ${mQ768px} {
      font-size: 4.5rem;
    }
    ${mQ960px} {
      margin-right: 40px;
      margin-bottom: 0;
      font-size: 5rem;
      flex: 0.5;
    }
  `,
  descriptionContainer: css`
    font-size: 1rem;
    line-height: 1.875rem;
    ${mQ960px} {
      flex: 0.5;
    }
  `,
  description: css`
    margin-bottom: 30px;
    ${mQ480px} {
      font-size: 1.125rem;
    }
  `,
  primary: css`
    max-width: ${theme.maxWidth};
    margin: 3rem auto;
    padding: 0 ${theme.plr};
    ${mQ768px} {
      padding: 0 ${theme.plrls};
    }
  `,
}

export default styles
