/** @jsx jsx */
import { jsx } from "@emotion/core"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import styles from "./blogpage.css"

const SocialShare = ({ siteMetadata, slug, title }) => {
  const { siteUrl, twitter } = siteMetadata
  const baseUrl = `${siteUrl}/`

  return (
    <div css={styles.social}>
      <p css={styles.heading}>share</p>
      <ul css={styles.socialList}>
        <li>
          <a
            target="_blank"
            title="twitter"
            rel="noopener noreferrer"
            href={
              "https://twitter.com/share?url=" +
              baseUrl +
              slug +
              "/&text=" +
              title +
              "&via=" +
              twitter
            }
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="facebook"
            rel="noopener noreferrer"
            href={
              "https://www.facebook.com/sharer/sharer.php?u=" +
              baseUrl +
              slug +
              "/"
            }
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="linkedin"
            rel="noopener noreferrer"
            href={
              "https://www.linkedin.com/shareArticle?url=" +
              baseUrl +
              slug +
              "/"
            }
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SocialShare
