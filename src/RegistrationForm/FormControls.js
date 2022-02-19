import React from "react";
import { Segment, Button, Icon, Divider, Grid } from "semantic-ui-react";

const FormControls = (props) => {
  return (
    <Segment basic>
      <Divider section />
      <Grid stackable>
        <Grid.Row>
          <Grid.Column textAlign="right">
            <Button
              icon
              labelPosition="left"
              secondary
              onClick={props.onStepBack}
            >
              <Icon name="left arrow" position="left" />
              Back
            </Button>
            <Button
              icon
              labelPosition="right"
              primary
              onClick={props.onStepForward}
            >
              Save &amp; Continue
              <Icon name="right arrow" position="right" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default FormControls;
