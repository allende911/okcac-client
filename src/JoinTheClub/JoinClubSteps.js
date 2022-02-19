import React from "react";
import { Step } from "semantic-ui-react";

const JoinClubSteps = (props) => {
  const steps = props.steps;
  return (
    <Step>
      <Step.Group size="tiny" attached="top">
        <Step active={steps === 1 && true} completed={steps > 1 && true}>
          Benefits
        </Step>
        <Step active={steps === 2 && true} completed={steps > 2 && true}>
          Primary Member
        </Step>
        <Step active={steps === 3 && true} completed={steps > 3 && true}>
          Add Family
        </Step>
        <Step>Review &amp; Pay</Step>
      </Step.Group>
    </Step>
  );
};

export default JoinClubSteps;
