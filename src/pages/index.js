import * as React from "react";
import { Link } from "gatsby";

import Layout from "@components/layout";
import Seo from "@components/seo";

const IndexPage = () => { 
  const {
    GATSBY_PROGRAMMER_FIRST_NAME: firstName,
    GATSBY_PROGRAMMER_LAST_NAME: lastName,
  } = process.env
  return (
    <Layout>
      <Seo title="Home" />
      <h1>
        I&#39;m Muneeb. <br />
        I solve problems. <br />
        I create solutions.
        I write code.
      </h1>
      <p>Welcome to my website!</p>

      <h2>My name is {firstName} {lastName}</h2>

      <p>Check out the <Link to="/showcase">showcase link</Link> to see what I&#39;ve been up to.</p>
      <p>
        <Link to="/showcase">Go showcase</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG (deferred static generation)"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;
