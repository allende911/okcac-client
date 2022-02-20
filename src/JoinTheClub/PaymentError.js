import React from "react";
import { Container, Divider, Icon, Header, Segment } from "semantic-ui-react";

const PaymentError = (props) => {
  return (
    <Container text textAlign="left">
      <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
        <Header size="huge" icon textAlign="center">
          <Icon name="rocket" circular color="blue" />
          Yikes! Something Went Wrong
        </Header>
        <Divider />
        <Header size="large">What happens now?</Header>
        <p>
          It is possible your data was still submitted and your payment went
          through. If you do not hear from us within 48 hours, please send an
          email to info@okcastroclub.com with your name and time of payment and
          we will check it out.
        </p>
        <p>It is probably our fault. This thing is still in beta!</p>
      </Segment>
    </Container>
  );
};

export default PaymentError;
