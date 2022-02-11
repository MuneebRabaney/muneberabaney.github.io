
import * as React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import { 
  Base 
} from "@layouts";

const style = {
  defaults: {
    margin: "0 auto",
    maxWidth: 960,
    padding: "1.45rem 1.0875rem"
  },
}


const Container = ({ preset, stretch = false, children, ...props  }) => {

  return (
    <Base 
      preset={!!preset && preset}
      stretch={!!stretch && stretch}
      {...props}
      style={{
        ...style.defaults,
      }}
    >
      <TransitionState>
        {({ transitionStatus, exit, entry, mount }) => {
          console.log("current page's transition status is", transitionStatus)
          console.log("exit object is", exit)
          console.log("entry object is", entry)
          return children;    
        }}
      </TransitionState>
    </Base>
  )
}

export default Container;