import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const styles = {
  container: {
    maxWidth: "100%",
    display: "inline-block",
    clear: 'both'
  },
};

const Experience = ({ 
  children,
  companyName, 
  companyLocation,
  employeeRole, 
  employeeDescription,
  employmentType,
  employmentLifespan,
  technologyStack,
}) => (
  <section style={styles.container}>
    <header>
      <h2 style={{ margin: 0 }}>
        {companyName}, 
        <span style={{ 
          'font-weight': 400, 
          display: 'inline-block' 
        }}>
          {companyLocation} - {employeeRole}
        </span>
      </h2>
      <h3></h3>
    </header>
    <p style={{ 'text-decoration': 'underline' }}>Duties and Responsibilities:</p>
    { children }
    { employeeDescription && <p>{employeeDescription}</p> }
  </section>
);

Experience.propTypes = {
  companyName: PropTypes.string, 
  companyLocation: PropTypes.string,
  employeeRole: PropTypes.string, 
  employeeDescription: PropTypes.string,
  employmentType: PropTypes.string,
  employmentLifespan: PropTypes.string,
}

Experience.defaultProps = {
  companyName: '', 
  companyLocation: '',
  employeeRole: '', 
  employeeDescription: '',
  employmentType: '',
  employmentLifespan: '',
}

export default Experience;
