import React from 'react';
import { Element } from 'react-scroll';
import styles from './Content.module.css';
import theme from "../theme/theme";



const ulStyle = {
  display: "row",
  // flexDirection: "row",
  listStyleType: "none",
  padding: 1,
  marginRight: "900px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.7rem", // Change the font size here
  fontFamily: theme.typography.nav.fontFamily,
  fontWeight: theme.typography.nav.fontWeight,
  textTransform: theme.typography.nav.textTransform as "uppercase",
};

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <nav style={{ paddingTop: '100px' }}>
       <ul style={ulStyle}>
         <li><a href="#project-overview">Project Overview</a></li>
         <li><a href="#the-collection">The Collection</a></li>
         <li><a href="#states-tokenomics">States Tokenomics</a></li>
         <li><a href="#smart-contracts">Smart Contracts</a></li>
         <li><a href="#kyc">KYC</a></li>
         <li><a href="#about-us">About Us</a></li>
         <li><a href="#the-team">The Team</a></li>
       </ul>
      </nav>
      <Element name="project-overview" style={{ marginTop: '500px' }}>
        <h1>Project Overview</h1>
        <p>This is the project overview section.</p>
      </Element>
      <Element name="the-collection">
        <h1>The Collection</h1>
        <p>This is the collection section.</p>
      </Element>
      <Element name="states-tokenomics">
        <h1>States Tokenomics</h1>
        <p>This is the states tokenomics section.</p>
      </Element>
      <Element name="smart-contracts">
        <h1>Smart Contracts</h1>
        <p>This is the smart contracts section.</p>
      </Element>
      <Element name="kyc">
        <h1>KYC</h1>
        <p>This is the KYC section.</p>
      </Element>
      <Element name="about-us">
        <h1>About Us</h1>
        <p>This is the about us section.</p>
      </Element>
      <Element name="the-team">
        <h1>The Team</h1>
        <p>This is the team section.</p>
      </Element>
    </div>
  );
};

export default Content;
