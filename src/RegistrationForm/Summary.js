import React from "react";
import { Divider, Header, Segment, Table } from "semantic-ui-react";

const Summary = (props) => {
  return (
    <Segment padded basic textAlign="left">
      <Table padded basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Summary:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>
                <strong>
                  {props.registrant.firstName} {props.registrant.lastName}
                </strong>
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>${props.registrant.price}</p>
            </Table.Cell>
          </Table.Row>
          {props.step > 2 ? (
            <>
              <Header as="h5">Family &amp; Guests:</Header>
              {props.guests.map((guest) => (
                <Table.Row>
                  <Table.Cell>
                    <p>
                      {guest.firstName} {guest.lastName}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>${guest.price}</p>
                  </Table.Cell>
                </Table.Row>
              ))}
            </>
          ) : null}
          <Header as="h5">Dates:</Header>
          {props.checked.map((day, index) => (
            <Table.Row key={index}>
              <Table.Cell>{day}</Table.Cell>
              <Table.Cell>$5</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Summary;
