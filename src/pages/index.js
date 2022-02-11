import * as React from "react";
import Typical from "react-typical";
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Layout, Seo } from "@components";
import { Link } from "gatsby";

const IndexPage = () => { 
  
  return (
    <Layout preset="center">
      <Seo title="Home" />
      <Typical
        steps={[
          "", 1600, 
          "I'm Muneeb. ", 1600, 
          "I solve problems. ", 1600,
          " I implement solutions. ", 1600,
          "I write code. ", 1600,
          "!!♥️ ", 1600,
          "Follow the White Rabbit? ",
        ]}
        loop={1}
        wrapper="h1"
      />
      <p 
        data-delay="8s" 
        className="slide-in-right-left">
        <Link to="/showcase">Click here </Link> 
        to see what I&#39;ve been up to.
      </p>
    </Layout>
  )
}

export default IndexPage;
