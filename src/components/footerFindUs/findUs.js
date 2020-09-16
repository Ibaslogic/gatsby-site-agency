/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

import styles from "./findUs.css"
import FooterHeading from "../footerHeading/heading"

const FindUs = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          companyAddress
          mobileNumber
        }
      }
    }
  `)

  const { email, companyAddress, mobileNumber } = data.site.siteMetadata

  return (
    <div css={styles.content}>
      <FooterHeading heading={heading} />
      <div css={styles.inTouch}>
        <span css={styles.icon}>
          <FaMapMarkerAlt />
        </span>
        <span>{companyAddress}</span>
      </div>
      <div css={styles.inTouch}>
        <span css={styles.icon}>
          <FaEnvelope />
        </span>
        <span>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
      <div css={styles.inTouch}>
        <span css={styles.icon}>
          <FaPhoneAlt />
        </span>
        <span>{mobileNumber}</span>
      </div>
    </div>
  )
}
export default FindUs
