/** @jsx jsx */
import { jsx } from "@emotion/core"
import Consult from "../footerConsult/consult"
import Services from "../footerServicesList/services"
import FindUs from "../footerFindUs/findUs"
import FooterBottom from "../FooterBottomLayer/footerBottom"
import styles from "./footer.css"

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.content}>
        <div css={styles.top}>
          <Consult />
          <Services heading="services" />
          <FindUs heading="find us" />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}
export default Footer
