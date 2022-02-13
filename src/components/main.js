/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "@styles/layout.scss";
import * as React from "react";
import PropTypes from "prop-types";
// import { Container } from "@components/grid";
import { Header, Footer } from "@components";
import { useStaticQuery, graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

const Main = ({ children, preset, logo, ...props }) => {
  const styles = {
    container: {
      width: "100%",
      maxWidth: 960,
      margin: `0 auto`,
      // maxHeight: typeof window !== "undefined" ? window.innerHeight / 100 * 80 : "84vh",
      height: '100vh',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          logo
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header logo={logo} siteTitle={data.site.siteMetadata?.title || "Title"} />
      <div style={styles.container}>
        {children}
      </div>
      <Footer show={false} />
      {/* <footer style={styles.footer}> */}
      {/* 
        &copy; {new Date().getFullYear()}, Built with ♥️
        {` `}
        using
        <a
          style={styles.link} 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.gatsbyjs.com">
          Gatsby
        </a>
       */}
      {/* </footer> */}
    </React.Fragment>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main;
