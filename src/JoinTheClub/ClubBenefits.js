import React from "react";
import { Button, Divider, Header, Icon, Segment } from "semantic-ui-react";
import RenewalPrice from "./RenewalPrice";

const ClubBenefits = (props) => {
  return (
    <>
      <Header size="huge" icon textAlign="center">
        <Icon name="rocket" circular color="blue" />
        Member Benefits
      </Header>
      <Segment padded basic>
        <Header sub textAlign="center">
          A membership to the OKCAC is $36 per year. Your first year is
          pro-rated and is currently $<RenewalPrice />. Dues renew on April 1.
        </Header>
        <Divider />

        <Header size="medium">We Are a Community of Amateur Scientists</Header>
        <p>
          Join a community of scientifically inclined people who are eager to
          share their knowledge of the night sky, astronomy, telescopes, and
          photography. Your dues contribute to our ability to hold our monthly
          meetings, perform upkeep on our club observatory, host outreach
          events, and put on the annual Okie-Tex Star Party.
        </p>
        <Header size="medium">Access to Cheddar Ranch Observatory</Header>
        <p>
          As a club member, you get access to our club observatory, Cheddar
          Ranch, located about 90 minutes outside Oklahoma City. Twice a month
          (sometimes more!), when the moon is at its lowest, CRO holds Member
          Nights. After three months of club membership, you are eligible for a
          private membership to CRO, which will grant you access whenever you
          want!
        </p>
        <Header size="medium">Outreach Events, Private &amp; Public</Header>
        <p>
          The club holds public and private outreach events for the community.
          As a member, if you are eager to share your knowledge, you are welcome
          to volunteer at these events to teach about the night sky and
          astronomy.
        </p>
        <Button
          floated="right"
          icon
          labelPosition="right"
          type="button"
          primary
          onClick={props.onHandleStepOne}
          style={{ marginBottom: "1rem" }}
        >
          Continue
          <Icon name="arrow right" />
        </Button>
      </Segment>
    </>
  );
};

export default ClubBenefits;
