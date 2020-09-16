/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useSocialData } from "../../hooks/use-social-data"

import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaBullseye,
} from "react-icons/fa"

import styles from "./footerBottom.css"

const FooterBottom = () => {
  const { social } = useSocialData()

  return (
    <div css={styles.container}>
      <div css={styles.inner}>
        <p css={styles.designBy}>
          {/* Don't change this */}
          Designed and developed by{" "}
          <a
            href="https://twitter.com/ibaslogic"
            target="_blank"
            rel="noopener noreferrer"
            title="ibas Majid"
          >
            Ibas Majid
          </a>{" "}
          &copy; {new Date().getFullYear().toString()}
        </p>
        <div css={styles.social}>
          <ul css={styles.list}>
            {social.map(element => {
              const { name, link } = element
              const socialIcon =
                name === "linkedIn" ? (
                  <FaLinkedin />
                ) : name === "twitter" ? (
                  <FaTwitter />
                ) : name === "github" ? (
                  <FaGithub />
                ) : name === "facebook" ? (
                  <FaFacebookSquare />
                ) : name === "instagram" ? (
                  <FaInstagram />
                ) : name === "googlePlus" ? (
                  <FaGooglePlusG />
                ) : (
                  //generic icon
                  <FaBullseye />
                )

              return (
                <li key={name} css={styles.item}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                  >
                    {socialIcon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default FooterBottom
