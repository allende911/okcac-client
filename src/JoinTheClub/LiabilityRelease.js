import React from "react";
import { Button, Icon, Modal, Segment, Header, Label } from "semantic-ui-react";
import { Field, FormikProvider } from "formik";

const LiabilityRelease = (props) => {
  const primary = props.primary;

  return (
    <Segment basic textAlign="center">
      <FormikProvider value={primary}>
        <Label
          name="liability"
          htmlFor="liability"
          size="large"
          color="blue"
          style={{ paddingTop: "1rem", width: "100%", height: "100%" }}
        >
          I accept the liability release.
          <Field
            id="liability"
            name="liability"
            type="checkbox"
            error={
              primary.errors.liability && primary.touched.liability
                ? { content: primary.errors.liability }
                : null
            }
            style={{
              marginLeft: "1rem",
              marginTop: "-.5rem",
              width: 25,
              height: 25,
            }}
          />
        </Label>
        <Modal
          centered
          onClose={() => props.setOpen(false)}
          onOpen={() => props.setOpen(true)}
          open={props.modalOpen}
          trigger={
            <Button
              size="small"
              type="button"
              icon
              labelPosition="left"
              style={{ marginTop: 10 }}
            >
              <Icon name="folder" />
              View Release
            </Button>
          }
        >
          <Modal.Header>
            Oklahoma City Astronomy Club Liability Release
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>It's Dark at Night!</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                tellus molestie nunc non blandit massa enim nec dui. Viverra
                accumsan in nisl nisi scelerisque eu.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                tellus molestie nunc non blandit massa enim nec dui. Viverra
                accumsan in nisl nisi scelerisque eu.
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Close"
              labelPosition="right"
              icon="checkmark"
              onClick={() => props.setOpen(false)}
              primary
            />
          </Modal.Actions>
        </Modal>
      </FormikProvider>
    </Segment>
  );
};

export default LiabilityRelease;
