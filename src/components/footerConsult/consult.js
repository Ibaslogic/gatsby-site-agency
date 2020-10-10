/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"

import FooterHeading from "../footerHeading/heading"
import styles from "./consult.css"

const Consult = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerSection {
            consultation {
              heading
              subHeading
              buttonText
              buttonTextLinkTo
            }
          }
        }
      }
    }
  `)

  const {
    heading,
    subHeading,
    buttonText,
    buttonTextLinkTo,
  } = data.site.siteMetadata.footerSection.consultation

  return (
    <div css={styles.content}>
      <div css={styles.text}>
        <FooterHeading heading={heading} />
        <p css={styles.subHeading}>{subHeading}</p>
      </div>
      <div css={styles.btnContainer}>
        <Link className="btn-primary" to={buttonTextLinkTo}>
          {buttonText}
        </Link>
      </div>
    </div>
  )
}
export default Consult
