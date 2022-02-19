import React from "react";
import Dates from "./Dates";
import { Divider, Form, Header } from "semantic-ui-react";

const StepOne = (props) => {
  return (
    <>
      <Header as="h2">Primary Registrant:</Header>
      <Form.Group>
        <Form.Input
          width={8}
          label="First Name"
          placeholder="Simon"
          id="First Name"
          value={props.registrant.firstName}
          onChange={props.onFirstName}
        />
        <Form.Input
          width={8}
          label="Last Name"
          placeholder="Reynolds"
          id="Last Name"
          value={props.registrant.lastName}
          onChange={props.onLastName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={16}
          label="Email"
          placeholder="registrar@okie-tex.com"
          id="Email"
          value={props.registrant.email}
          onChange={props.onEmail}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={16}
          label="Street Address"
          placeholder="123 Cowabunga Dr"
          id="Street Address"
          value={props.registrant.address}
          onChange={props.onAddress}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={7}
          label="City"
          placeholder="Mauna Kea"
          id="City"
          value={props.registrant.city}
          onChange={props.onCity}
        />
        <Form.Input
          width={3}
          label="State/Principality"
          placeholder="Oklahoma"
          id="State"
          value={props.registrant.state}
          onChange={props.onState}
        />
        <Form.Input
          width={3}
          label="Country"
          placeholder="US"
          id="Country"
          value={props.registrant.country}
          onChange={props.onCountry}
        />
        <Form.Input
          width={3}
          label="Postal Code"
          placeholder="99999"
          id="Postal Code"
          value={props.registrant.postalCode}
          onChange={props.onPostal}
        />
      </Form.Group>
      <Divider section />
      <Header as="h3">Your Star Party Dates:</Header>
    </>
  );
};

export default StepOne;
