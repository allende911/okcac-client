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
                In consideration with being granted access to use the Oklahoma
                City Astronomy Club's observing site, Cheddar Ranch Observatory
                (CRO):
              </p>
              <p>
                I or we do release, waive, forever discharge, and covenant not
                to sue the Oklahoma City Astronomy Club, its officers, members,
                and employees, from and against any and all liability for any
                harm, injury, damage, claims, demands, actions, causes of
                action, costs, and expenses of any nature which participant may
                have or which may hereafter accrue to participant, arising out
                of or related to any loss, damage, or injury, including but not
                limited to suffering and death, that may be sustained by
                participate or his or her property, whether caused by the
                negligence or carelessness of the releasees, or otherwise, while
                participant is in, on, upon, or in transit to or from the
                premises. I or we have agreed to this release in full
                recognition and appreciation of the dangers, hazards, and risks
                of such activities.
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
