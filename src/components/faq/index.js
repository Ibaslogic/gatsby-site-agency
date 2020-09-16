/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"

import styles from "../../css/faq.css"
import { theme } from "../../components/layout/theme"

import { FaTimes, FaPlus } from "react-icons/fa"

const Faq = ({ faq, heading }) => {
  const [shownAnswer, setShownAnswer] = useState({})

  //toggle multiple hamburger callback function
  const toggleAnswer = id => {
    setShownAnswer(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqBackground = {
    backgroundColor: theme.lightSecondary,
  }

  return (
    <section css={styles.faqSection}>
      <div css={styles.inner}>
        <h2 css={styles.heading}>{heading}</h2>
        <div css={styles.list}>
          {faq.map(({ id, question, answer }, index) => (
            <button
              style={shownAnswer[id] ? faqBackground : null}
              css={styles.item}
              onClick={() => toggleAnswer(id)}
              key={index}
            >
              <div css={styles.faqTop}>
                <div css={styles.quest}>
                  <p>{question}</p>
                </div>
                <div css={styles.toggle}>
                  {shownAnswer[id] ? <FaTimes /> : <FaPlus />}
                </div>
              </div>
              <div
                css={shownAnswer[id] ? styles.showAnswer : styles.noShowAnswer}
              >
                <p>{answer}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Faq
