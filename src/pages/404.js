import * as React from "react";
import Layout from "@components/layout";
import Seo from "@components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Error 404 - Not Found</h1>
    <p>You appear to have upset the balance of nature.</p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
