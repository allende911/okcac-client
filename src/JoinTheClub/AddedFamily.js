import React from "react";
import { Button, Icon, Segment, Table } from "semantic-ui-react";

const AddedFamily = (props) => {
  const family = props.family;

  return (
    <Segment>
      <Table compact basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {family.map((member) => (
            <Table.Row key={member.id}>
              <Table.Cell>{member.firstName}</Table.Cell>
              <Table.Cell>{member.lastName}</Table.Cell>
              <Table.Cell textAlign="center">
                <Button
                  icon
                  type="button"
                  color="red"
                  onClick={(event) =>
                    props.setFamily(
                      family.filter((item) => {
                        return item.id !== member.id;
                      })
                    )
                  }
                >
                  <Icon name="remove" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default AddedFamily;
