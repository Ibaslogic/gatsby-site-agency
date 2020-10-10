/** @jsx jsx */
import { jsx } from "@emotion/core"

import styles from "./contactForm.css"

export const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />{" "}
      <input type="hidden" name="form-name" value="contact" />{" "}
      <ul css={styles.list}>
        <li css={styles.inputItem}>
          <input
            type="text"
            placeholder="Full name"
            name="name"
            id="name"
            aria-label="your-name"
            required
          />
        </li>
        <li css={styles.inputItem}>
          <input
            type="text"
            placeholder="Company"
            name="company"
            id="company"
            aria-label="your-company"
          />
        </li>
        <li css={styles.inputItem}>
          <input
            type="text"
            placeholder="Your email"
            name="email"
            id="email"
            aria-label="your-email"
            required
          />
        </li>
        <li css={styles.inputItem}>
          <input
            type="tel"
            placeholder="phone number"
            name="phone"
            aria-label="phone-number"
          />
        </li>
        <li css={styles.textareaItem}>
          <textarea
            name="message"
            placeholder="Your message"
            id="message"
            aria-label="text-area"
            rows="6"
            required
          />
        </li>
      </ul>
      <div css={styles.btnContainer}>
        <button className="btn-primary" aria-label="submit-form">
          Send Message
        </button>
      </div>
    </form>
  )
}
