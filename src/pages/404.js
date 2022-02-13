import * as React from "react";
import { Main, Seo } from "@components";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Main>
    <Seo title="404: Not found" />
    <h1>Error 404 - Not Found</h1>
    <p>You appear to have upset the balance of nature.</p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to the homepage</Link>
  </Main>
)

export default NotFoundPage
