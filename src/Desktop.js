import React from "react";
import { Segment } from "semantic-ui-react";
import JoinClubForm from "./JoinTheClub/JoinClubForm";
import Navigation from "./Navigation";

const Desktop = () => {
  return (
    <Segment basic textAlign="center">
      <Navigation />
      <JoinClubForm />
    </Segment>
  );
};

export default Desktop;
