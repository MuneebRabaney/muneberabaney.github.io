import * as React from "react";
import { Link } from "gatsby";

import {
  Seo, Layout, 
  Sidebar, Experience, 
} from "@components";

const Showcase = () => {
  const [ pageID, setPageID ] = React.useState(false);
  const [ pageCount, setPageCount ] = React.useState(false);

  return (
    <React.Fragment>
      <Seo title="Showcase" />
      <Layout preset="primary__4:8" className="grid-container">

        <Sidebar data-column-size="4" className="grid-column" />

        
        <div data-column-size="8" className="grid-column">
          <h1>My Journey</h1>
          <h3>This is what I've been up to.</h3>

          <Experience 
            companyName="Rogerwilco"
            companyLocation="Durbanville"
            employeeRole="Senior Engineer" 
            employmentType="Fix - Term Contract"
            employmentLifespan="August 2020 - current"
          >
            <ul>
              <li>
                <p>Maintain and Extend the new V&amp;A Mobile Application.</p>
              </li>
              <li>
                <p>Up skill/Train Interns and Junior developers.</p>
              </li>
              <li>
                <p>Working independently or as pair.</p>
              </li>
              <li>
                <p>Decision making regarding scalability and performance when dealing with a critical event.</p>
              </li>
              <li>
                <p>Enforcing clean coding practices to maintain project consistency.</p>
              </li>
              <li>
                <p>Keeping on track with login time for each day/sprint.</p>
              </li>
              <li>
                <p>Keeping on track with login time for each day/sprint.</p>
              </li>
              <li>
                <p>Attending daily standup meetings.</p>
              </li>
              <li>
                <p>Flagging/logging queries with my line manager.</p>
              </li>
              <li>
                <p>Ensuring that all services installed across Backend Applications are kept up to date.</p>
              </li>
            </ul>
            
          </Experience>

          <Experience 
            companyName="Infonetix"
            employmentType="Contract"
            employeeRole="Senior Lead Engineer"
            companyLocation="WoodStock, Cape Town"
            employmentLifespan="October 2020 - current"
          >
            <ul>
              <li>
                <p>Creating / Maintaining Functional Specifications</p>
              </li>
              <li>
                <p>Up skill/Train Interns and Junior developers.</p>
              </li>
              <li>
                <p>Working independently or as pair.</p>
              </li>
              <li>
                <p>Decision making regarding scalability and performance when dealing with a critical event.</p>
              </li>
              <li>
                <p>Enforcing clean coding practices to maintain project consistency.</p>
              </li>
              <li>
                <p>Keeping on track with login time for each day/sprint.</p>
              </li>
              <li>
                <p>Attending daily standup meetings.</p>
              </li>
              <li>
                <p>Flagging/logging queries with my line manager.</p>
              </li>
              <li>
                <p>Ensuring that all services installed across Backend Applications are kept up to date.</p>
              </li>
            </ul>
          </Experience>
          
          <Experience 
            companyName="Ogilvy"
            companyLocation="Cape Town CBD"
            employeeRole="Senior Developer"
            employmentType="Contract"
          >
            <ul>
              <li>
                <p>Audi (Main site, Dealer Specific Audi Sites and all Audi Products)</p>
                <ul>
                  <li>
                    <p></p>
                  </li>
                </ul>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
            Main Clients maintained:
            <a target="_blank" rel="noreferrer" href="https://www.audi.co.za/"> Audi </a> 
            &amp; 
            <a target="_blank" rel="noreferrer" href="https://www.vw.co.za/"> Volkswagen </a>
          </Experience>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </React.Fragment>
  )
}

export default Showcase;