/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../css/blogtemplate.css"

import TagLinks from "../components/blogpage/tagLinks"
import NavigatePosts from "../components/blogpage/navigatePost"
import SocialShare from "../components/blogpage/socialShare"

import { FaRegClock, FaEdit } from "react-icons/fa"

import BackgroundHero from "../components/global/backgroundHero"

const BlogPost = ({ data, pageContext }) => {
  const {
    title,
    description,
    datePublished,
    dateUpdated,
    featured,
    tags,
  } = data.postData.frontmatter
  const { siteMetadata } = data.configData
  const { giHubPostBaseURL, blogPostPath } = siteMetadata
  const image = featured && featured.childImageSharp.fluid
  const { excerpt, timeToRead } = data.postData

  // Get previous and next link
  const prev = pageContext.prev
    ? {
        url: pageContext.prev.fields.slug,
      }
    : null
  const next = pageContext.next
    ? {
        url: pageContext.next.fields.slug,
      }
    : null

  // const giHubPostBaseURL =
  //   "https://github.com/Ibaslogic/Ibaslogic/blob/master/src/"

  return (
    <Layout>
      <SEO
        title={title}
        excerpt={excerpt}
        description={description}
        image={image}
        isBlogPost
      />

      <main className="" role="main">
        <article className="single-post">
          <div css={styles.entryHeader}>
            {featured && (
              <BackgroundHero img={image} styleClass={styles.headerImage}>
                <div css={styles.contentWrapper}>
                  <div css={styles.innerContent}>
                    <h1 css={styles.title}>{title}</h1>
                    <div css={styles.meta}>
                      <div css={styles.posted}>
                        <span>
                          {datePublished === dateUpdated
                            ? "Published"
                            : "Updated"}
                          : {dateUpdated}
                        </span>
                        <span css={styles.read}>
                          {" "}
                          <FaRegClock /> {timeToRead} min read
                        </span>
                      </div>
                      <div css={styles.edit}>
                        <span>
                          <a
                            href={giHubPostBaseURL + pageContext.postPath}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaEdit /> Edit Post
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundHero>
            )}
          </div>
          <div css={styles.entryContent}>
            <div
              css={styles.primary}
              dangerouslySetInnerHTML={{ __html: data.postData.html }}
            ></div>
            <aside css={styles.secondary}>
              <div css={styles.secondaryContent}>
                <div css={styles.tags}>{tags && <TagLinks tags={tags} />}</div>
                <div css={styles.navigateContainer}>
                  <NavigatePosts
                    prev={prev}
                    next={next}
                    blogPostPath={blogPostPath}
                  />
                </div>
                <div css={styles.share}>
                  <SocialShare
                    slug={pageContext.slug}
                    title={title}
                    siteMetadata={siteMetadata}
                  />
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    configData: site {
      siteMetadata {
        siteUrl
        twitter
        giHubPostBaseURL
        blogPostPath
      }
    }
    postData: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 300)
      timeToRead
      frontmatter {
        title
        tags
        datePublished(formatString: "Do MMM, YY")
        dateUpdated(formatString: "Do MMM, YY")
        featured {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`
