import React from "react"

import Header from "../global/header"
import Footer from "../global/footer"

import { Global } from "@emotion/core"
import styles from "./layout.css"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <Global styles={[styles]} />
        <Header />
        <div className="main__content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
