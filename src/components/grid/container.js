import * as React from "react";
// import { TransitionState } from "gatsby-plugin-transition-link";
import { 
  Base 
} from "@layouts";

const style = {
  defaults: {
    margin: "0 auto",
    maxWidth: 960,
    height: '100vh',
    padding: "1.45rem 1.0875rem"
  },
}


const Container = ({ preset, stretch = false, children, ...props  }) => {
  return (
    <Base 
      preset={!!preset && preset}
      stretch={!!stretch && stretch}
      style={{
        ...style.defaults,
      }}
      {...props}
    >
    { children } 
    </Base>
  )
}

export default Container;
