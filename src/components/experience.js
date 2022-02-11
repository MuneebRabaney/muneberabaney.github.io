import * as React from "react";
import PropTypes from "prop-types";

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
  visible = false
}) => !visible ? null : (
  <section style={styles.container}>
    <header>
      <h2 style={{ margin: 0 }}>
        {companyName}, &nbsp;
        <span style={{ 
          fontWeight: 400, 
          display: 'inline-block' 
        }}>
          {companyLocation} - {employeeRole}
        </span>
      </h2>
      <br />
      <h4 style={{ textDecoration: 'underline' }}>
        Duties and Responsibilities:
      </h4>
    </header>
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
  employeeRole: '', 
  companyLocation: '',
  employmentType: '',
  employmentLifespan: '',
  employeeDescription: ''
}

export default Experience;
