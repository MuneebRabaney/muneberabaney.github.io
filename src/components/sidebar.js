import * as React from "react";

const Sidebar = ({ siteTitle, className, children, ...rest }) => (
  <div className={className + " sidebar"} {...rest}>
    <header
        style={{
          background: `#69BAE4`,
          marginBottom: `1.45rem`,
        }}
      >
      <h1 style={{ margin: 0 }}>
        test
      </h1>
    </header>
    {!!children && children}
  </div>
)

export default Sidebar;
