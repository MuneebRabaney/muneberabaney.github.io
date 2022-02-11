/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "@styles/layout.scss";
import * as React from "react";
import PropTypes from "prop-types";
import { Container } from "@components/grid";
import Header from "@components/header";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children, preset, ...additionalProps }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
      <div
        style={{
          maxWidth: 960,
          margin: `0 auto`,
          height: '55vh',
          overflow: 'hidden',
          position: 'relative',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Container data-preset={preset} {...additionalProps}>
          {children}
        </Container>
        
      </div>
      <footer
        style={{
          left: 30,
          right: 30,
          bottom: 40,
          marginTop: "2rem",
          display: "block",
          textAlign: "right",
          position: "absolute"
        }}
      >
        &copy; {new Date().getFullYear()}, Built with ♥️
        {` `}
        using
        <a
          style={{ 
            paddingLeft: 5,
            display: 'inline-block'
          }} 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.gatsbyjs.com">
          Gatsby
        </a>
      </footer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
