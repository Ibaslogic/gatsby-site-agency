/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import Post from "../../post"

import FilterPosts from "./filterPosts"
import styles from "./blogItems.css"

// filter posts by categories
const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all posts", ...categories]
  return categories
}

const BlogItems = ({ items }) => {
  // switch posts layout
  const [defaultLayout, setDefaultLayout] = useState(true)

  // fllter posts
  const [postItems] = useState(items.blogPosts.edges)
  const [blogPostItems, setBlogPostItems] = useState(items.blogPosts.edges)
  const [categories] = useState(getCategories(items.blogPosts.edges))
  const [selectedItem, setSelectedItem] = useState(
    getCategories(items.blogPosts.edges) &&
      getCategories(items.blogPosts.edges)[0]
  )

  const itemsNum = items.blogPosts.edges.length
  const postPath = items.postPath.siteMetadata.blogPostPath

  // handle filter posts
  const handleItems = category => {
    let tempItems = [...postItems]
    if (category === "all posts") {
      setBlogPostItems(tempItems)
      setSelectedItem(category)
    } else {
      let items = tempItems.filter(
        ({ node }) => node.frontmatter.category === category
      )
      setBlogPostItems(items)
      setSelectedItem(category)
    }
  }

  // Toggle Filter Posts layout
  const handleToggle = () => {
    setDefaultLayout(prev => !defaultLayout)
  }

  if (itemsNum > 0) {
    return (
      <main css={styles.main} role="main">
        <div css={styles.container}>
          <FilterPosts
            categories={categories}
            handleToggle={handleToggle}
            handleItems={handleItems}
            selectedItem={selectedItem}
            defaultLayout={defaultLayout}
          />

          <ul css={defaultLayout ? styles.list : styles.list2}>
            {blogPostItems.map(({ node }) => {
              const { id, frontmatter, timeToRead, excerpt, fields } = node
              const {
                title,
                dateUpdated,
                datePublished,
                featured,
              } = frontmatter
              return (
                <Post
                  key={id}
                  title={title}
                  updated={dateUpdated}
                  posted={datePublished}
                  time={timeToRead}
                  slug={fields.slug}
                  excerpt={excerpt}
                  featured={featured}
                  defaultLayout={defaultLayout}
                  postPath={postPath}
                />
              )
            })}
          </ul>
        </div>
      </main>
    )
  } else {
    return (
      <main css={styles.main} role="main">
        <div css={styles.noPost}>
          <p>There are no posts to display...please add items</p>
        </div>
      </main>
    )
  }
}
export default BlogItems
