import { css } from "@emotion/core"

// import global variables
import { theme } from "./theme.js"
import mediaQueryGen from "../../utils/mediaQueryGen"

const [mQ480px, mQ768px] = mediaQueryGen([{ width: "480" }, { width: "768" }]) //mQ576px, { width: "576" },

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background: #fff;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.4;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
  }

  button {
    outline: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-weight: bold;
    line-height: 1.1;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.62671rem;
  }
  h3 {
    font-size: 1.38316rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.85028rem;
  }
  h6 {
    font-size: 0.78405rem;
  }

  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    border-style: none;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  button,
  input,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  ul,
  ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }

  // layout style
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    flex-grow: 1;
  }
  // .main__content {
  // }

  // End layout

  .btn-primary {
    display: inline-block;
    text-decoration: none;
    letter-spacing: 3px;
    color: ${theme.darkColor};
    background: ${theme.sColor};
    padding: 10px;
    border: 1px solid ${theme.sColor};
    transition: ${theme.transition};
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;

    &:hover,
    &:focus {
      background: transparent;
      color: #fff;
    }

    ${mQ480px} {
      padding: 0.6rem 0.9rem;
    }
  }

  //header style on scroll

  .scrolled header {
    background: #fff none repeat scroll 0% 0%;
    border-bottom: 1px solid rgb(234, 234, 234);

    nav a {
      color: ${theme.pColor} !important;
    }
  }

  //link style for white background header

  .blog-page header,
  .testimonial-page header,
  .about-page header,
  .contact-page header,
  .tag-page header,
  .services-page header,
  .error-page header {
    ${mQ768px} {
      border-color: ${theme.borderColor};
    }
    nav a {
      ${mQ768px} {
        color: ${theme.pColor} !important;
      }
    }
  }

  // no scroll
  .noScroll {
    overflow-y: hidden;
  }

  // main content
  .main__content {
    padding-top: 56px;
    ${mQ768px} {
      padding: 0;
    }
  }
`

export default styles
