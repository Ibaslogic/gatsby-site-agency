/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ContactForm } from "./contactForm"

import styles from "./contact.css"

const ContactContent = ({ data }) => {
  const {
    heading,
    subHeading,
    showContactForm,
  } = data.contactData.siteMetadata.contactPage
  return (
    <main css={styles.main} role="main">
      <div css={styles.inner}>
        <header css={styles.heading}>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
        </header>
        {showContactForm && <ContactForm />}
      </div>
    </main>
  )
}
export default ContactContent
