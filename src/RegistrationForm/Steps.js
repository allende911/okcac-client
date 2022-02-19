import React from "react";
import { Step, Segment } from "semantic-ui-react";

const Steps = (props) => {
  return (
    <Segment basic textAlign="left">
      <Step.Group ordered vertical fluid size="tiny">
        <Step
          disabled={props.step === 1 ? false : true}
          completed={props.step !== 1 ? true : false}
        >
          <Step.Content title="Primary Registrant" />
        </Step>
        <Step
          disabled={props.step === 2 ? false : true}
          completed={props.step > 2 ? true : false}
        >
          <Step.Content title="Add Family &amp; Guests" />
        </Step>
        <Step
          disabled={props.step === 3 ? false : true}
          completed={props.step > 3 ? true : false}
        >
          <Step.Content title="Extras &amp; Addons" />
        </Step>
        <Step
          disabled={props.step === 4 ? false : true}
          completed={props.step > 4 ? true : false}
        >
          <Step.Content title="Finish &amp; Pay" />
        </Step>
      </Step.Group>
    </Segment>
  );
};

export default Steps;
