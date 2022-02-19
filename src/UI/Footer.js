import React from "react";
import { Divider, Grid, Header } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <Divider inverted />
      <Grid columns={3}>
        <Grid.Column>
          <Header inverted></Header>
        </Grid.Column>
        <Grid.Column>
          <Header inverted size="small"></Header>
        </Grid.Column>
        <Grid.Column>Login</Grid.Column>
      </Grid>
    </>
  );
};

export default Footer;
