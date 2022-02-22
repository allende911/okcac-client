import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { Button, Icon, Modal, Segment, Label } from "semantic-ui-react";
import { Field, FormikProvider } from "formik";
import ReactMarkdown from "react-markdown";

const LiabilityRelease = (props) => {
  const { get, loading } = useFetch("http://localhost:1337/api/site-setting");
  const [release, setRelease] = useState();
  const primary = props.primary;

  useEffect(() => {
    get("?[fields]=liabilityRelease").then((data) =>
      setRelease(data.data.attributes.liabilityRelease)
    );
  }, []);

  return (
    !loading && (
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
            <Modal.Content>
              <Modal.Description>
                <ReactMarkdown>{release}</ReactMarkdown>
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
    )
  );
};

export default LiabilityRelease;
