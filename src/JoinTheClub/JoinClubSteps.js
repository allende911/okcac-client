import React from "react";
import { Loader, Step } from "semantic-ui-react";

const JoinClubSteps = (props) => {
  const steps = props.steps;

  return (
    <Step>
      <Step.Group size="tiny" attached="top">
        {!props.content ? (
          <Loader />
        ) : (
          props.content.map((step) =>
            step.id <= 4 ? (
              <Step
                active={steps === step.id && true}
                completed={steps > step.id && true}
                key={step.id}
              >
                {step.stepCardDisplay}
              </Step>
            ) : (
              ""
            )
          )
        )}
      </Step.Group>
    </Step>
  );
};

export default JoinClubSteps;
