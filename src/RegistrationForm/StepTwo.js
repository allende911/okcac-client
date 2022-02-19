import React, { useState } from "react";
import Guests from "./Guests";
import { Icon, Form, Header, Button, Radio } from "semantic-ui-react";

const StepTwo = (props) => {
  return (
    <>
      <Header as="h2">Additional Registrants</Header>
      <Form.Group widths="equal">
        <Form.Input
          label="First Name:"
          placeholder="Simon"
          id="First Name"
          value={props.guest.firstName}
          onChange={(event) =>
            props.setGuest({ ...props.guest, firstName: event.target.value })
          }
        />
        <Form.Input
          label="Last Name:"
          placeholder="Reynolds"
          id="Last Name"
          value={props.guest.lastName}
          onChange={(event) =>
            props.setGuest({ ...props.guest, lastName: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input label="Family/Guest">
          <Radio
            style={{ marginTop: ".75rem" }}
            label="(+$25)"
            name="radioGroup"
            status="regular"
            checked={props.guest.status === "regular"}
            onClick={(event, { status }) =>
              props.setGuest({ ...props.guest, status: status, price: 25 })
            }
          />
        </Form.Input>
        <Form.Input label="Under 16">
          <Radio
            style={{ marginTop: ".75rem" }}
            label="(+$0)"
            name="radioGroup"
            status="child"
            checked={props.guest.status === "child"}
            onClick={(event, { status }) =>
              props.setGuest({ ...props.guest, status: status, price: 0 })
            }
          />
        </Form.Input>
        <Form.Input label="Full Registrant">
          <Radio
            style={{ marginTop: ".75rem" }}
            label="(+$50)"
            name="radioGroup"
            status="upgrade"
            checked={props.guest.status === "upgrade"}
            onClick={(event, { status }) =>
              props.setGuest({ ...props.guest, status: status, price: 50 })
            }
          />
        </Form.Input>

        <Form.Input>
          <Button
            labelPosition="right"
            icon
            onClick={props.onAddGuest}
            style={{ marginTop: "1.25rem" }}
          >
            <Icon name="plus square" />
            Add Guest
          </Button>
        </Form.Input>
      </Form.Group>
      <Guests
        guests={props.guests}
        setGuests={props.setGuests}
        setPrice={props.setPrice}
      />
    </>
  );
};

export default StepTwo;
