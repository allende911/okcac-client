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
  const [cancelled, setCancelled] = useState();
  const { get } = useFetch("https://okcac-strapi.herokuapp.com/api/");

  useEffect(() => {
    get("signup-form?populate[additionalPage]=*").then((data) =>
      setCancelled(data.data.attributes.additionalPage)
    );
  }, []);

  return !cancelled ? (
    <Loader />
  ) : (
    <Container text textAlign="left">
      <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
        <Segment padded basic>
          <Header size="huge" icon textAlign="center">
            <Icon name={cancelled[1].icon} circular color="blue" />
            {cancelled[1].headline || ""}
          </Header>
          <Header sub textAlign="center">
            {cancelled[1].subheading || ""}
          </Header>
          <Divider />
          <ReactMarkdown>{cancelled[1].content}</ReactMarkdown>
        </Segment>
      </Segment>
    </Container>
  );
};

export default Success;
