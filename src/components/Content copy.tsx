import React, { CSSProperties } from "react";
import theme from "../theme/theme";

const Content: React.FC = () => {
  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90vh",
    position: "relative",
  };

  const logoStyle: CSSProperties = {
    alignSelf: 'center',
    width: '300px', // Adjust the width as needed
    height: '700px', // Adjust the height as needed
    marginTop: '-400px', // Adjust the margin as needed
  };

  const textContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    right: "70px", // Adjust the right position as needed
    bottom: "-10px", // Adjust the top position as needed
  };

  const textStyle1: CSSProperties = {
    fontSize: "84px",
    fontFamily: theme.typography.title1.fontFamily,
    fontWeight: theme.typography.title1.fontWeight,
    marginBottom: "0px",
  };

  const textStyle2: CSSProperties = {
    fontSize: "150px",
    fontFamily: theme.typography.title2.fontFamily,
    fontWeight: theme.typography.title2.fontWeight,
 
  };

  return (
    <div style={containerStyle}>
      <img src="/Wild5_Logo_20230322.svg" alt="Wild5 Logo" style={logoStyle} />
      <div style={textContainerStyle}>
      <div>
        <span style={textStyle1}>THE WORLD'S MOST</span>
      </div>
      <div>
        <span style={textStyle1}>ACCESSIBLE</span>
      </div>
      <div style={textStyle2}>WINE NFT</div>
      </div>
    </div>
  );
};

export default Content;
