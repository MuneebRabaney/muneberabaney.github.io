import "@styles/layout.scss";
import * as React from "react";
// import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
const styles = {
  footer: {
    left: 'auto',
    right: 0,
    bottom: 0,
    display: "block",
    textAlign: "right",
    position: "absolute",
    padding: "1.5rem"
  },
  link: { 
    paddingLeft: 5,
    display: 'inline-block'
  }
}

const Footer = show => {

  return (
    <footer style={{ 
      ...styles.footer,
      // show && ...{}
    }}>
      <p>
        &copy; {new Date().getFullYear()}, {` `}
        Built with ♥️
        {` `}
        using
        <a
          target="_blank" 
          rel="noreferrer" 
          style={styles.link} 
          href="https://www.gatsbyjs.com">
          
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer;
