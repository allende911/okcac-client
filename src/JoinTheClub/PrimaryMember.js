import React from "react";
import LiabilityRelease from "./LiabilityRelease";
import {
  Button,
  Icon,
  Form,
  Header,
  Divider,
  Segment,
} from "semantic-ui-react";

const PrimaryMember = (props) => {
  const primary = props.primary;

  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="user" color="blue" circular />
        Primary Member
      </Header>
      <Divider section />
      <Segment padded basic style={{ width: "100%" }}>
        <Form.Input
          type="text"
          label="First Name"
          id="firstName"
          value={primary.values.firstName}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.firstName && primary.touched.firstName
              ? { content: primary.errors.firstName }
              : null
          }
        />
        <Form.Input
          type="text"
          label="Last Name"
          id="lastName"
          value={primary.values.lastName}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.lastName && primary.touched.lastName
              ? { content: primary.errors.lastName }
              : null
          }
        />

        <Form.Input
          type="email"
          label="Email Address"
          id="email"
          placeholder="info@okcastroclub.com"
          value={primary.values.email}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.email && primary.touched.email
              ? { content: primary.errors.email }
              : null
          }
        />
        <Form.Input
          type="text"
          label="Phone Number"
          id="phone"
          placeholder="(405) 123-4567)"
          minLength="7"
          maxLength="14"
          value={primary.values.phone}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.phone && primary.touched.phone
              ? { content: primary.errors.phone }
              : null
          }
        />
        <LiabilityRelease
          primary={primary}
          modalOpen={props.modalOpen}
          setOpen={props.setOpen}
          setChecked={props.setChecked}
          checked={props.checked}
        />
      </Segment>
      {/* <Header as="h2">Contact Information:</Header>
      <Form.Group widths="equal">
        <Form.Input
          type="text"
          label="Address"
          id="address"
          placeholder="123 Sesame Street"
          value={primary.values.address}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.address && primary.touched.address ? true : null
          }
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          width={5}
          type="text"
          label="City"
          id="city"
          placeholder="Oklahoma City"
          value={primary.values.city}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={primary.errors.city && primary.touched.city ? true : null}
        />
        <Form.Input
          width={5}
          type="text"
          label="State"
          id="state"
          minLength="2"
          maxLength="2"
          placeholder="OK"
          value={primary.values.state}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={primary.errors.state && primary.touched.state ? true : null}
        />
        <Form.Input
          width={5}
          type="text"
          label="Zipcode"
          id="zipcode"
          minLength="5"
          maxLength="5"
          placeholder="73013"
          value={primary.values.zipcode}
          onChange={primary.handleChange}
          onBlur={primary.handleBlur}
          error={
            primary.errors.zipcode && primary.touched.zipcode ? true : null
          }
        />
      </Form.Group> */}
      <Button
        type="button"
        floated="right"
        icon
        labelPosition="right"
        primary
        disabled={!primary.isValid || !primary.touched.firstName}
        onClick={props.onHandleStepTwo}
        style={{ marginBottom: "1rem" }}
      >
        <Icon name="arrow right" />
        Continue
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

export default PrimaryMember;
