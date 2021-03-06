import React from "react";
import {
  Button,
  Divider,
  Header,
  Icon,
  Loader,
  Segment,
  Table,
} from "semantic-ui-react";
import RenewalPrice from "./RenewalPrice";

const Checkout = (props) => {
  const primary = props.primary.values;
  const family = props.family;

  return (
    <Segment basic padded>
      <Header size="huge" icon textAlign="center">
        <Icon name={props.content[3].contentBlock.icon} color="blue" circular />
        {props.content[3].contentBlock.headline}
      </Header>
      <Header sub textAlign="center">
        {props.content[3].contentBlock.subheading || ""}
      </Header>
      <Divider section />
      <Header as="h3">Primary Member:</Header>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{primary.firstName}</Table.Cell>
            <Table.Cell>{primary.lastName}</Table.Cell>
            <Table.Cell>{primary.email}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {family.length > 0 && (
        <>
          <Header as="h3">Family Members:</Header>
          <Table basic="very">
            <Table.Body>
              {family.map((member) => (
                <Table.Row key={member.id}>
                  <Table.Cell>{member.firstName}</Table.Cell>
                  <Table.Cell>{member.lastName}</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
      Membership Price: ${<Loader /> && <RenewalPrice />}
      <Segment basic textAlign="center">
        <Button
          primary
          size="huge"
          type="submit"
          onClick={props.onHandleSubmit}
        >
          Become a Member
        </Button>
      </Segment>
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
    </Segment>
  );
};

export default Checkout;
