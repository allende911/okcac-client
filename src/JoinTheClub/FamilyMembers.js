import React from "react";
import { Button, Divider, Form, Header, Icon } from "semantic-ui-react";
import AddedFamily from "./AddedFamily";

const FamilyMembers = (props) => {
  const familyTemp = props.familyTemp;
  const family = props.family;

  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular color="blue" />
        Family Members
      </Header>
      <Header sub textAlign="center">
        Your family joins with you!
      </Header>
      <Divider section />
      <Form.Group widths="equal">
        <Form.Input
          type="text"
          label="First Name"
          id="firstName"
          value={familyTemp.values.firstName}
          onChange={familyTemp.handleChange}
          onBlur={familyTemp.handleBlur}
          error={
            familyTemp.errors.firstName && familyTemp.touched.firstName
              ? true
              : null
          }
        />
        <Form.Input
          type="text"
          label="Last Name"
          id="lastName"
          value={familyTemp.values.lastName}
          onChange={familyTemp.handleChange}
          onBlur={familyTemp.handleBlur}
          error={
            familyTemp.errors.lastName && familyTemp.touched.lastName
              ? true
              : null
          }
        />
      </Form.Group>
      <Button
        type="button"
        onClick={props.onTempSubmit}
        labelPosition="left"
        icon
      >
        <Icon name="plus" />
        Add Family Member
      </Button>
      <Divider section />
      {family.length > 0 && (
        <AddedFamily family={family} setFamily={props.setFamily} />
      )}
      <Divider hidden />
      <Button
        icon
        labelPosition="right"
        floated="right"
        type="button"
        primary
        onClick={props.onHandleStepThree}
        style={{ marginBottom: "1rem" }}
      >
        Continue
        <Icon name="arrow right" />
      </Button>
      <Button
        type="button"
        floated="left"
        icon
        labelPosition="left"
        onClick={props.onHandleBack}
        style={{ marginBottom: "1rem" }}
      >
        <Icon name="left arrow" />
        Back
      </Button>
    </>
  );
};

export default FamilyMembers;
