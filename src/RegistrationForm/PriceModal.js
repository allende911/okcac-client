import React, { useState } from "react";
import { Icon, Modal, Header } from "semantic-ui-react";

const PriceModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Icon
          name="info circle"
          color="grey"
          aria-label="Pricing Information"
          link
        />
      }
    >
      <Modal.Header>Okie-Tex 2022 Price Information</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header as="h3">Registration Fees</Header>
          <p>
            A registration to the Okie-Tex Star Party costs $100 per
            full-registrant. This applies only to the primary registrant. Any
            additional members of your party are $50, but you may upgrade them
            to full registrant status with an additional $25.
          </p>
          <Header as="h3">What is a Full Registrant?</Header>
          <p>
            Being a full registrant gives you tickets to the Great Okie-Tex
            Giveaways, held on Wednesday and Friday nights. Secondary
            registrants do not get these tickets.
          </p>
          <Header as="h3">Additional Fees</Header>
          <p>
            Camp Billy Joe charges Okie-Tex attendees a camp-use fee of $5 per
            day of use.
          </p>
          <Header as="h3">Food, T-Shirts &amp; Bonus Sessions</Header>
          <p>
            You may order a commemorative Okie-Tex 2022 t-shirt when you
            register for $15. Additional t-shirts can be purchased at the same
            time.
          </p>
          <p>
            The catered meals are provided by Jody's Catering, and registering
            for those meals is separated. Please see here for additional
            instructions.
          </p>
          <p>
            Some years, the Star Party may hold additional, advanced sessions
            pertaining to specific elements of amateur astronomy. These may
            incur an additional fee should you choose to attend.
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default PriceModal;
