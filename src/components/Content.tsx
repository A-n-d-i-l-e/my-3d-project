import React, { CSSProperties, useEffect, useRef } from "react";
import theme from "../theme/theme";
import baffle from "baffle";

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
    width: '300px',
    height: '600px',
    marginTop: '-370px',
  };

  const textContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    right: "70px",
    bottom: "-40px",
  };

  const textStyle1: CSSProperties = {
    fontSize: "74px",
    fontFamily: theme.typography.title1.fontFamily,
    fontWeight: theme.typography.title1.fontWeight,
    marginBottom: "0px",
  };

  const textStyle2: CSSProperties = {
    fontSize: "150px",
    fontFamily: theme.typography.title2.fontFamily,
    fontWeight: theme.typography.title2.fontWeight,
  };

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (text1Ref.current && text2Ref.current && text3Ref.current) {
      const baffleText1 = baffle(text1Ref.current, { characters: "░" });
      const baffleText2 = baffle(text2Ref.current, { characters: "░" });
      const baffleText3 = baffle(text3Ref.current, { characters: "░" });


      baffleText1.start();
      baffleText2.start();
      baffleText3.start();

      setTimeout(() => {
        baffleText1.reveal(100);
        baffleText2.reveal(103);
        baffleText3.reveal(106);
      }, 350);
    }
  }, []);

  return (
    <div style={containerStyle}>
      <img src="/Wild5_Logo_20230322.svg" alt="Wild5 Logo" style={logoStyle} />
      <div style={textContainerStyle}>
        <span ref={text1Ref} style={textStyle1}>
          THE WORLD'S MOST
        </span>
        <span ref={text2Ref} style={textStyle1}>
          ACCESSIBLE
        </span>
        <div ref={text3Ref} style={textStyle2}>
          WINE NFT
        </div>
      </div>
    </div>
  );
};

export default Content;
