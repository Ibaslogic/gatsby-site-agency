/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Helmet from "react-helmet"

import styles from "./header.css"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !navbarOpen)
  }

  // Detect on page scroll
  useEffect(() => {
    let isMounted = true
    const onScroll = () => {
      if (isMounted) {
        if (window.pageYOffset > 5) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className={scroll ? `scrolled` : `top`}>
      <header css={styles.pageHeader}>
        <Helmet>
          <html lang="en" className={navbarOpen ? `noScroll` : ``} />
        </Helmet>
        <div css={styles.headerContent}>
          <Link css={styles.brand} to="/">
            <span>business</span>
          </Link>
          <Menu navbarOpen={navbarOpen} handleToggle={handleToggle} />
        </div>
      </header>
    </div>
  )
}
export default Header
