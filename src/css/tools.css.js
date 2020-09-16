import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ400px, mQ768px] = mediaQueryGen([
  { width: "400" },
  //   { width: "480" },
  { width: "768" },
  //   { width: "960" },
])

const styles = {
  headingContainer: css`
    background: #080709;
    color: ${theme.mainWhite};
  `,
  headingContent: css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 2rem ${theme.plr};
    ${mQ768px} {
      padding: 2rem ${theme.plrls};
    }

    p {
      margin-bottom: 0;
    }
  `,
  tools: css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 2rem ${theme.plr};
    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }
  `,
  list: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 14px;
    grid-column-gap: 14px;
    list-style: none;
    margin: 0;
    ${mQ400px} {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  `,
  item: css`
    padding: 10px;
    background: #fff;
    box-shadow: ${theme.boxShadow};
    display: flex;
    justify-content: center;
  `,
}

export default styles
