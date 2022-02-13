import * as React from "react";
import Typical from "react-typical";
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Main, Seo } from "@components";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import RabbitImage from "@images/rabbit_jump_2.gif";

const IndexPage = props => { 
  // let isMounted = false;

  // let [count, setCount] = React.useState(0);
  
  // // if (!count) setCount(count++);
  
  // React.useEffect(() => {
  //   if (!isMounted) isMounted = true;

  //   if (!!isMounted && count) {
      
  //     // const  window.setTimeout(() => {
        
  //     //   // return setCount(++count);

  //     // }, 1000);

  //   }

  //   return () => {
  //     isMounted = false;
  //   }
  // }, [ isMounted, count ]);

  // console.log(count);
  
  return (
    <Main preset="center">
      <Seo title="Home" />
      <Typical
        loop={1}
        wrapper="h1"
        steps={[
          "", 1600, 
          "Hello World!", 1600, 
          "", 2000, 
          "I'm Muneeb.", 1600, 
          "", 2000,
          "I solve problems.", 1600,
          "", 2000,
          "I implement solutions.", 1600,
          "", 2000,
          "I write code.", 1600,
          "", 2000,
          "!! ♥️", 1600,
          "", 2000,
          "Follow the White Rabbit ....", 1600,
        ]}
        {...props}
      />
      {/* <p 
        style={{ 
          marginTop: 30
        }}
        data-delay="8s" 
        className="slide-in-right-left">
        <Link to="/showcase">Click here </Link> 
        to see what I&#39;ve been up to.
      </p> */}
      <img 
        className="invert-color"
        style={{ 
          left: "-100%",
          transform: "translateX(100%)",
          bottom: 0,
          top: "auto",
          position: "inherit",
          width: 300,
          height: "auto",
          maxWidth: "100%",

        }}
        alt="White Rabbit" 
        src={RabbitImage} 
      />
    </Main>
  )
}

export default IndexPage;
