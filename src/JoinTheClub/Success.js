import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import {
  Container,
  Divider,
  Icon,
  Header,
  Segment,
  Loader,
} from "semantic-ui-react";
import ReactMarkdown from "react-markdown";

const Success = (props) => {
  const [success, setSuccess] = useState();
  const { get, loading } = useFetch("http://parsecs.io/api/");

  useEffect(() => {
    get("signup-form?populate[additionalPage]=*").then((data) =>
      setSuccess(data.data.attributes.additionalPage)
    );
  }, []);

  return !success ? (
    <Loader />
  ) : (
    <Container text textAlign="left">
      <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
        <Segment padded basic>
          <Header size="huge" icon textAlign="center">
            <Icon name={success[0].icon} circular color="blue" />
            {success[0].headline || ""}
          </Header>
          <Header sub textAlign="center">
            {success[0].subheading || ""}
          </Header>
          <Divider />
          <ReactMarkdown>{success[0].content}</ReactMarkdown>
        </Segment>
      </Segment>
    </Container>
  );
};

export default Success;
