/** @jsx jsx */
import { jsx } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import styles from "../css/404Page.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="An error page." />
    <Helmet>
      <body className="error-page" />
    </Helmet>
    <main css={styles.main} role="main">
      <div css={styles.container}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
