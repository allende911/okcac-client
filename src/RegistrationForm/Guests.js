import React from "react";
import { Divider, Header, Table, Icon, Button } from "semantic-ui-react";

const Guests = (props) => {
  return (
    props.guests != 0 && (
      <>
        <Divider section />
        <Header as="h3">Your Family and Guests:</Header>
        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={6}>Name</Table.HeaderCell>
              <Table.HeaderCell>Family/Guest</Table.HeaderCell>
              <Table.HeaderCell>Under 16</Table.HeaderCell>
              <Table.HeaderCell>Full Registrant</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.guests.map((member) => (
              <Table.Row key={member.id}>
                <Table.Cell>
                  {member.firstName} {member.lastName}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {member.status === "regular" ? <Icon name="check" /> : ""}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {member.status === "child" ? <Icon name="check" /> : ""}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {member.status === "upgrade" ? <Icon name="check" /> : ""}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  <Button
                    icon
                    status={member.status}
                    color="red"
                    index={member.id}
                    onClick={(event) =>
                      props.setGuests(
                        props.guests.filter((item) => {
                          return item.id !== member.id;
                        })
                      )
                    }
                  >
                    <Icon name="remove circle" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    )
  );
};

export default Guests;
