import React from "react";
import { Grid } from "semantic-ui-react";
import JoinClubSteps from "./JoinTheClub/JoinClubSteps";
import JoinClubForm from "./JoinTheClub/JoinClubForm";

const DesktopLayout = () => {
  return (
    <Grid stackable>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8} textAlign="left">
        <JoinClubForm />
        <JoinClubSteps />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
};

export default DesktopLayout;
