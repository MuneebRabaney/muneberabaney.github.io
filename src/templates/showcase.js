import * as React from "react";
import { Link } from "gatsby";

import {
  Seo, Layout, Sidebar, Experience, Filter
} from "@components";

const Showcase = () => (
  <Layout preset="primary__4:8" className="grid-container">
    <Seo title="Showcase" />
    <h1>My Journey</h1>
    <p>This is what I've been up to.</p>
    {/* <Filter /> */}

    {/* Rogerwilco Digital agency */}
    <Sidebar data-column-size="4" className="grid-column" />
    
    <div data-column-size="4" className="grid-column">
      <Experience 
        companyName="Rogerwilco"
        companyLocation="Durbanville"
        employeeRole="Senior Engineer" 
        employmentType="Fix - Term Contract"
        employmentLifespan="August 2020 - current"
      >
        <ul>
          <li>
            <p>Maintain and Extend the V&amp;A Mobile Application</p>
          </li>
          <li>
            <p>Up-skilling Intern and Junior developers &amp;A Mobile Application</p>
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
        
      </Experience>

      
      <Experience 
        companyName="Infonetix"
        employmentType="Contract"
        employeeRole="Senior Lead Engineer"
        companyLocation="WoodStock, Cape Town"
        employmentLifespan="October 2020 - current"
      >
        
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
        <Link target="_blank" rel="noreferrer" href="https://www.audi.co.za/">Audi</Link> 
        &amp; 
        <Link target="_blank" rel="noreferrer" href="https://www.vw.co.za/">Volkswagen</Link>
      </Experience>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Showcase;