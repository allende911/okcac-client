import React from "react";
import { Container, Divider, Icon, Header, Segment } from "semantic-ui-react";

const Success = (props) => {
  return (
    <Container text textAlign="left">
      <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
        <Header size="huge" icon textAlign="center">
          <Icon name="rocket" circular color="blue" />
          Thank you for joining!
        </Header>
        <Divider />
        <Header size="large">What happens now?</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          tellus molestie nunc non blandit massa enim nec dui. Viverra accumsan
          in nisl nisi scelerisque eu.
        </p>
        <Segment textAlign="left">
          <Header size="large">Upcoming Events</Header>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Nibh tellus molestie nunc non blandit massa enim nec dui. Viverra
            accumsan in nisl nisi scelerisque eu.
          </p>
        </Segment>
        <Segment textAlign="left">
          <Header size="large">Got Questions?</Header>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Segment>
        <Segment color="blue" inverted>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Segment>
      </Segment>
    </Container>
  );
};

export default Success;
