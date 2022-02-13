import * as React from "react";
import { Link } from "gatsby";

import { Main, Seo } from "@components";

const UsingSSR = ({ serverData }) => {
  return (
    <Main>
      <Seo title="Using SSR" />
      <h1>SSR page</h1>
      <img
        alt="A random dog"
        src={serverData.message}
        style={{ width: "300px" }}
      />
      <p>Welcome to a server side rendered page with a random dog photo</p>
      {/* Describe what it means when you rendering a page on the server */}
      <Link to="/">Go back to the homepage</Link>
    </Main>
  )
}

export default UsingSSR;

export async function getServerData() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!response.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await response.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
