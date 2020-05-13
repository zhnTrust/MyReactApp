import React from "react"
import Header from "../components/Header"
import "./Layout.css"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ childen }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
      </Helmet>
      <Header />
      {childen}
    </div>
  )
}

export default Layout
