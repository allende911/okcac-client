import React from "react";
import { Header, Segment } from "semantic-ui-react";
import RenewalPrice from "./RenewalPrice";

const Summary = (props) => {
  const steps = props.steps;
  const primary = props.primary.values;
  const family = props.family;

  return (
    <>
      {steps > 1 && <RenewalPrice />}
      {steps > 2 && (
        <Segment basic textAlign="left">
          <Header as="h4">Primary Member:</Header>
          <p>
            {primary.firstName} {primary.lastName}
          </p>
          <Header as="h5">Family Members:</Header>
          {family.map((member) => (
            <p key={member.id}>
              {member.firstName} {member.lastName}
            </p>
          ))}
        </Segment>
      )}
    </>
  );
};

export default Summary;
