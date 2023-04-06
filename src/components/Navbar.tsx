import React, { CSSProperties } from "react";
import Link from "next/link";
import theme from "../theme/theme";
import Hamburger from "./Hamburger";

const Navbar: React.FC = () => {
  const navStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B1E0B",
    height: "60px",
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "relative",
  };

  

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    padding: 0,
    marginLeft: "-15%",
    textDecoration: "none" // add this line
  };
  

  const linkStyle: CSSProperties = {
    marginLeft: "15px",
    marginRight: "15px",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: theme.typography.nav.fontFamily,
    fontWeight: theme.typography.nav.fontWeight,
    textTransform: theme.typography.nav.textTransform as "uppercase",
    color: "white",
  };
  
  
  
  
  
  

  const dividerStyle = {
    display: "inline",
    marginLeft: "15px",
    marginRight: "15px",
    color: "white",
    textDecoration: "none",
  };

  const hamburgerStyle: CSSProperties = {
    position: "absolute",
    top: "20px", // Change this to a fixed value
    right: "50px",
    color: "#fff",
  };
  

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={{ marginRight: "15px" }}>
          <Link href="/">
            <span style={linkStyle}>WHITE PAPER</span>
          </Link>
        </li>
        <span style={dividerStyle}>|</span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page1">
            <span style={linkStyle}>ROADMAP</span>
          </Link>
        </li>
        <span style={dividerStyle}>|</span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page2">
            <span style={linkStyle}>HOW IT WORKS</span>
          </Link>
        </li>
            <span style={dividerStyle}>|</span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/gallerypage">
            <span style={linkStyle}>GALLERY</span>
          </Link>
        </li>
        <span style={dividerStyle}>|</span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page4">
            <span style={linkStyle}>Marketplace</span>
          </Link>
        </li>
        <span style={dividerStyle}>|</span>
        <li>
          <Link href="/page5">
            <span style={linkStyle}>REDEEM</span>
          </Link>
        </li>
      </ul>
      <div style={hamburgerStyle}>
        <Hamburger />
        
      </div>
    </nav>
  );
};

export default Navbar;
