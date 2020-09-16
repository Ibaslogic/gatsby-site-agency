/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./menu.css"

const Menu = ({ handleToggle, navbarOpen }) => {
  const defaultLinks = {
    blog: { title: `Blog`, url: `/blog` },
    services: { title: `Services`, url: `/services` },
    about: { title: `About`, url: `` },
    contact: { title: `Contact`, url: `/contact-us` },
  }

  // Giving users the options to update link from the config

  // Get Users choice menuLinks
  const menuData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            name
            url
            title
          }
          linkMenuColor {
            color
            hover
          }
        }
      }
    }
  `)

  const { menuLinks, linkMenuColor } = menuData.site.siteMetadata

  const linkColor = css`
    & a {
      color: ${linkMenuColor.color};
    }
    & a:hover {
      color: ${linkMenuColor.hover};
    }
  `

  menuLinks.forEach(({ name, title, url }) => {
    const menuItem = defaultLinks[name]
    if (menuItem) {
      menuItem.title = title || menuItem.title
      menuItem.url = menuItem.url || url
    } else if (url && title) {
      defaultLinks["newItems"] = defaultLinks["newItems"] || []
      defaultLinks["newItems"].push({
        title,
        url,
      })
    }
  })

  // helper function
  function createMenu({ title, url }) {
    return (
      <li css={linkColor} key={url}>
        <Link activeClassName="activeNavItem" to={url}>
          {title}
        </Link>
      </li>
    )
  }
  // Generate Menu
  let menu = Object.entries(defaultLinks).map(([_key, value]) =>
    !Array.isArray(value)
      ? createMenu(value)
      : value.map(({ title, url }) => createMenu({ title, url }))
  )

  menu = [].concat(...menu)

  return (
    <div css={styles.globalMenu}>
      <nav className="menuNav">
        <div className="btnContainer">
          <button
            onClick={handleToggle}
            className={`menuBtn ${navbarOpen ? "is-opened" : ""}`}
          >
            <div className="btnline"></div>
            <div className="btnline"></div>
            <div className="btnline"></div>
          </button>
        </div>
        <ul className={`menu-list ${navbarOpen ? "show-nav" : ""}`}>{menu}</ul>
      </nav>
    </div>
  )
}

export default Menu
