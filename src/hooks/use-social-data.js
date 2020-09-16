import { useStaticQuery, graphql } from "gatsby"

export const useSocialData = () => {
  const { site } = useStaticQuery(
    graphql`
      query SocialUsernames {
        site {
          siteMetadata {
            social {
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
