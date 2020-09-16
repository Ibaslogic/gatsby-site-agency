import { css } from "@emotion/core"
import mediaQueryGen from "../utils/mediaQueryGen"
import { theme } from "../components/layout/theme"

const [mQ300px, mQ576px, mQ768px] = mediaQueryGen([
  { width: "300" },
  { width: "576" },
  { width: "768" },
])

const styles = {
  main: css`
    padding-top: 56px;
    background-image: linear-gradient(180deg, #fff 10%, #f0f1f2);
    background-repeat: repeat-x;
  `,
  container: css`
    max-width: ${theme.maxWidth};
    padding: 0px ${theme.plr} 1.5rem;
    margin: 0px auto;

    ${mQ768px} {
      padding: 3rem ${theme.plrls};
    }
  `,
  header: css`
    max-width: 300px;
    margin: 0px auto;
    margin-bottom: 40px;
    ${mQ768px} {
      max-width: 450px;
    }
  `,
  list: css`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: center;
  `,
  item: css`
    position: relative;
    margin-bottom: 3rem;
    ${mQ768px} {
      &:nth-of-type(2n + 1) {
        margin-right: 56.717%;
      }
      &:nth-of-type(2n) {
        margin-left: 56.717%;
        margin-top: -200px;
      }
    }
  `,
  imgContainer: css`
    display: flex;
    justify-content: center;
  `,
  img: css`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    ${mQ300px} {
      width: 250px;
      height: 250px;
    }
    ${mQ576px} {
      width: 300px;
      height: 300px;
    }
  `,
  heading: css`
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;
      color: ${theme.pColor};
      ${mQ576px} {
        font-size: 1.4rem;
      }
      ${mQ768px} {
        position: absolute;
        right: 0;
        margin-top: 10px;
      }
    }
  `,
}

export default styles
