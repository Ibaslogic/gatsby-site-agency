/** @jsx jsx */
import { jsx } from "@emotion/core"

import styles from "./about.css"
import data from "../../contents/aboutMe.json"

const AboutContent = () => {
  return (
    <main css={styles.main} role="main">
      <div css={styles.inner}>
        {data.map(({ subHeading, content }) => (
          <section css={styles.section} key={subHeading}>
            <h2
              css={styles.heading}
              dangerouslySetInnerHTML={{ __html: subHeading }}
            ></h2>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </section>
        ))}
      </div>
    </main>
  )
}
export default AboutContent
