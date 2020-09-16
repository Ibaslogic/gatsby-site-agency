import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ768px] = mediaQueryGen([
  //   { width: "300" },
  // { width: "480" },
  { width: "768" },
  //   { width: "960" },
])

const styles = {
  content: css`
    max-width: 992px;
    margin: 0 auto;
    padding: 3.5rem ${theme.plr};
    ${mQ768px} {
      padding: 5rem ${theme.plrls};
    }
  `,
  headingContainer: css`
    max-width: 650px;
    margin: 0 auto;
    position: relative;
    padding-left: 20px;
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      top: 0px;
      left: 0px;
      bottom: 0px;
      background: ${theme.sColor};
    }
  `,
  heading: css`
    font-size: 15px;
    margin-bottom: 20px;
    text-transform: uppercase;

    ${mQ768px} {
      font-size: 16px;
    }
  `,
  subHeading: css`
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 45px;
    ${mQ768px} {
      font-size: 23px;
      line-height: 40px;
      margin-bottom: 60px;
    }
  `,
  list: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-row-gap: 14px;
    grid-column-gap: 14px;
    list-style: none;
    margin: 0;
    text-align: center;
  `,
  item: css`
    padding: 10px 0;
  `,
}

export default styles
