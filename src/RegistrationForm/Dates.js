import React from "react";
import { Checkbox, Divider, Form } from "semantic-ui-react";

const Dates = (props) => {
  return (
    <Form.Group>
      {props.dates.map((date, index) => (
        <Form.Input label={date} key={index}>
          <Checkbox
            value={date}
            onChange={props.onChecked}
            label="+$5"
            id={date}
          />
          <Divider hidden />
        </Form.Input>
      ))}
    </Form.Group>
  );
};

export default Dates;
