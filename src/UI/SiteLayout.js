import React from "react";
import { Segment } from "semantic-ui-react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Footer from "./Footer";

const SiteBasic = (props) => {
  return (
    <div style={{ backgroundColor: "#0d1821", minHeight: "100vh" }}>
      <Segment basic textAlign="center">
        <Logo />
        <Navigation />
        {props.children}
      </Segment>
      <Footer />
    </div>
  );
};

export default SiteBasic;
