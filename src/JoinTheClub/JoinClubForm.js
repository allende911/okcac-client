import React, { useState } from "react";
import { Container, Form, Label, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import useFetch from "../utils/useFetch";
import validate from "./Validate";
import ClubBenefits from "./ClubBenefits";
import PrimaryMember from "./PrimaryMember";
import FamilyMembers from "./FamilyMembers";
import JoinClubSteps from "./JoinClubSteps";
import Checkout from "./Checkout";

const JoinClubForm = () => {
  const [data, setData] = useState({});
  const [steps, setSteps] = useState(1);
  const [family, setFamily] = useState([]);
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const current = new Date();
  const { post, loading } = useFetch("http://localhost:1337/api/");
  const primary = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      liability: false,
      joinedOn: `${current.getFullYear()}-${(
        "0" +
        (current.getMonth() + 1)
      ).slice(-2)}-${("0" + current.getDate()).slice(-2)}`,
    },
    validate,
  });

  const familyTemp = useFormik({
    initialValues: {
      id: family.length,
      firstName: "",
      lastName: "",
    },
    onSubmit: (values, actions) => {
      setFamily([...family, familyTemp.values]);
      actions.resetForm({
        values: {
          id: family.length + 1,
          firstName: "",
          lastName: "",
        },
      });
    },
  });

  const handleBack = (event) => {
    if (steps !== 1) {
      setSteps((prevSteps) => prevSteps - 1);
    }
  };

  const handleStepOne = (event) => {
    setSteps(2);
  };

  const handleStepTwo = (event) => {
    if (primary.isValid) {
      setSteps(3);
    }
  };

  const handleStepThree = (event) => setSteps(4);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let purgeKeys = family.map((keys) => ({
      firstName: keys.firstName,
      lastName: keys.lastName,
    }));
    let combined = { ...primary.values, family: [...purgeKeys] };

    const submission = {
      data: combined,
    };

    post("club-members", submission)
      .then((data) => setData(data))
      .then(() => alert("Success!", data, "loading:", loading))
      .catch((error) => console.log(error));
  };

  return (
    <Container text textAlign="left">
      <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
        <Label color="blue" ribbon="right">
          Currently: $6
        </Label>
        <Form
          style={{
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
          onSubmit={handleFormSubmit}
        >
          {steps === 1 && <ClubBenefits onHandleStepOne={handleStepOne} />}
          {steps === 2 && (
            <PrimaryMember
              primary={primary}
              onHandleBack={handleBack}
              onHandleStepTwo={handleStepTwo}
              modalOpen={modalOpen}
              setOpen={setModalOpen}
              setChecked={setChecked}
              checked={checked}
            />
          )}
          {steps === 3 && (
            <FamilyMembers
              familyTemp={familyTemp}
              family={family}
              setFamily={setFamily}
              onHandleBack={handleBack}
              onHandleStepThree={handleStepThree}
              onTempSubmit={familyTemp.handleSubmit}
            />
          )}
          {steps === 4 && (
            <Checkout
              primary={primary}
              family={family}
              onHandleBack={handleBack}
              onHandleSubmit={handleFormSubmit}
            />
          )}
        </Form>
        <JoinClubSteps steps={steps} />
      </Segment>
      )
    </Container>
  );
};

export default JoinClubForm;
