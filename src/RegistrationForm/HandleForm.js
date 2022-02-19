import React, { useState } from "react";
import {
  Container,
  Header,
  Segment,
  Form,
  Grid,
  Divider,
} from "semantic-ui-react";
import Steps from "./Steps";
import StepOne from "./StepOne";
import Dates from "./Dates";
import StepTwo from "./StepTwo";
import FormControls from "./FormControls";
import Price from "./Price";
import Summary from "./Summary";

const HandleForm = () => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [registrant, setRegistrant] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    status: "registrant",
    price: 100,
  });
  const [guest, setGuest] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    status: "",
    price: 0,
  });

  const [guests, setGuests] = useState([]);
  const [checked, setChecked] = useState([]);
  const dates = [
    "Friday (9/23)",
    "Saturday (9/24)",
    "Sunday (9/25)",
    "Monday (9/26)",
    "Tuesday (9/27)",
    "Wednesday (9/28)",
    "Thursday (9/29)",
    "Friday (9/30)",
  ];

  const [validated, setValidated] = useState();

  const handleStepForward = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleStepBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFirstName = (event) =>
    setRegistrant({ ...registrant, firstName: event.target.value });

  const handleLastName = (event) =>
    setRegistrant({ ...registrant, lastName: event.target.value });

  const handleEmail = (event) => {
    setRegistrant({ ...registrant, email: event.target.value });
    setPrice((prevPrice) => prevPrice + 100);
  };

  const handleAddress = (event) =>
    setRegistrant({ ...registrant, address: event.target.value });

  const handleCity = (event) =>
    setRegistrant({ ...registrant, city: event.target.value });

  const handleState = (event) =>
    setRegistrant({ ...registrant, state: event.target.value });

  const handleCountry = (event) =>
    setRegistrant({ ...registrant, country: event.target.value });

  const handlePostalCode = (event) =>
    setRegistrant({ ...registrant, postalCode: event.target.value });

  const handleAddGuest = (event) => {
    setGuest((prevGuest) => ({ ...guest, id: guests.length + 1 }));
    setGuests((prevGuests) => [...guests, guest]);
    setPrice((prevPrice) => prevPrice + guest.price);

    setGuest({
      id: guests.length + 1,
      firstName: "",
      lastName: "",
      status: "",
      price: 0,
    });
  };

  const handleChecked = (event) => {
    let updatedDates = [...checked];
    if (event.target.checked) {
      updatedDates = [...checked, event.target.value];
      setPrice((prevPrice) => prevPrice + 5);
    } else {
      updatedDates.splice(checked.indexOf(event.target.value, 1));
      setPrice((prevPrice) => prevPrice - 5);
    }
    setChecked(updatedDates);
  };

  return (
    <Grid>
      <Grid.Column width={4}>
        <Steps step={step} />
        <Divider />

        <Price price={price} />
        {step > 1 ? (
          <Summary
            guests={guests}
            registrant={registrant}
            step={step}
            checked={checked}
          />
        ) : null}
      </Grid.Column>
      <Grid.Column width={8}>
        <Container style={{ marginTop: "1rem" }}>
          <Segment padded>
            <Header textAlign="left" as="h1">
              Okie-Tex 2022 Registration
            </Header>

            <Segment textAlign="left" basic>
              <Form>
                {step === 1 && (
                  <>
                    <StepOne
                      registrant={registrant}
                      onFirstName={handleFirstName}
                      onLastName={handleLastName}
                      onEmail={handleEmail}
                      onAddress={handleAddress}
                      onCity={handleCity}
                      onState={handleState}
                      onCountry={handleCountry}
                      onPostal={handlePostalCode}
                    />
                    <Dates dates={dates} onChecked={handleChecked} />
                  </>
                )}
                {step === 2 && (
                  <StepTwo
                    onAddGuest={handleAddGuest}
                    guest={guest}
                    guests={guests}
                    setGuest={setGuest}
                    setGuests={setGuests}
                    setPrice={setPrice}
                  />
                )}
                {/* {step === 4 && <StepFour />}
            {step === 5 && <StepFive />}
            {step === 6 && <FormSubmitted />} */}
                <FormControls
                  onStepForward={handleStepForward}
                  onStepBack={handleStepBack}
                />
              </Form>
            </Segment>
          </Segment>
        </Container>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  );
};

export default HandleForm;
