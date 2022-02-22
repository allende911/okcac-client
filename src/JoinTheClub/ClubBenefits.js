import React from "react";
import {
  Button,
  Divider,
  Header,
  Icon,
  Segment,
  Loader,
} from "semantic-ui-react";
import ReactMarkdown from "react-markdown";

const ClubBenefits = (props) => {
  return !props.content ? (
    <Loader />
  ) : (
    <>
      <Header size="huge" icon textAlign="center">
        <Icon name={props.content[0].contentBlock.icon} circular color="blue" />
        {props.content[0].contentBlock.headline}
      </Header>
      <Header sub textAlign="center">
        {props.content[0].contentBlock.subheading || ""}
      </Header>
      <Divider section />
      <Segment padded basic>
        <ReactMarkdown>{props.content[0].contentBlock.content}</ReactMarkdown>

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
