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

  const cutoutStyle = `
    content: "";
    position: absolute;
    top: -2;
    left: 80px;
    width: 150px; /* Adjust this value to change the size of the cutout */
    height: 150px; /* Adjust this value to change the size of the cutout */
    background-color: #7EA595;
    border-radius: 50%;
    background-image: url('/Wild5_Logo_20231002.svg'); /* Add the SVG icon as a background image */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: 190px 190px;
  `;

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    padding: 0,
    marginLeft: "3%",
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

  const dividerWrapper: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <style>{`.navbar::before { ${cutoutStyle} }`}</style>
      <ul style={ulStyle} className="navbar"></ul>
      <ul style={ulStyle}>
        <li style={{ marginRight: "15px" }}>
          <Link href="/">
            <span style={linkStyle}>WHITE PAPER</span>
          </Link>
        </li>
        <span style={dividerWrapper}>
          <span style={dividerStyle}>|</span>
        </span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page1">
            <span style={linkStyle}>ROADMAP</span>
          </Link>
        </li>
        <span style={dividerWrapper}>
          <span style={dividerStyle}>|</span>
        </span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page2">
            <span style={linkStyle}>HOW IT WORKS</span>
          </Link>
        </li>
        <span style={dividerWrapper}>
          <span style={dividerStyle}>|</span>
        </span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/gallerypage">
            <span style={linkStyle}>GALLERY</span>
          </Link>
        </li>
        <span style={dividerWrapper}>
          <span style={dividerStyle}>|</span>
        </span>
        <li style={{ marginRight: "15px" }}>
          <Link href="/page4">
            <span style={linkStyle}>Marketplace</span>
          </Link>
        </li>
        <span style={dividerWrapper}>
          <span style={dividerStyle}>|</span>
        </span>
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
