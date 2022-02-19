import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img alt="logo" src="./assets/logo.png" width="40%" />
      </Link>
    </Container>
  );
};

export default Logo;
