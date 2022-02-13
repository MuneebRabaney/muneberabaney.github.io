import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ logo, visible = true }) => (
  <header
    style={{
      background: "#000",
      height: 100,
      maxHeight: 100,
      margin: "0 auto",
      maxWidth: "100%",
      visibility: !!visible ? "hidden" : "visible", 
      opacity: !!visible ? "0" : "1",
    }}
  >
    
      <h1>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1.7rem",
          }}
        >
        {/* 
          <span style={{
            display: "inline-block",
            color: "#f90e4e"
           }}>@</span>&nbsp;{'{'}
            <span 
              style={{ 
                lineHeight:"0rem", padding: "1.6rem 1.7rem 0.5rem 1.7rem", display: "block" 
              }}
            >
              return
              <span
              style={{ 
                display:"inline-block",
                color: "#f9c80e"
              }}
              >&nbsp;"</span>Hello World!
              <span
              style={{ 
                display:"inline-block",
                color: "#f9c80e"
              }}
              >"</span>
            </span>
          {'}'}
        */}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header;
