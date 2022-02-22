import React, { useState, useEffect } from "react";
import { Container, Form, Label, Loader, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import { loadStripe } from "@stripe/stripe-js";
import useFetch from "../utils/useFetch";
import validate from "./Validate";
import ClubBenefits from "./ClubBenefits";
import PrimaryMember from "./PrimaryMember";
import FamilyMembers from "./FamilyMembers";
import JoinClubSteps from "./JoinClubSteps";
import Checkout from "./Checkout";
import RenewalPrice from "./RenewalPrice";
import Success from "./Success";

const stripePromise = loadStripe(
  "pk_test_51KTx32Ff9B6igBMjGFFnQpoISxB0W19RSwvkgPBmJvAUnJYdbuSCOpLNDElE8YBTITTWkUsv3IBNv19xnK5krXoj00xIpghiQV"
);

const JoinClubForm = () => {
  const [data, setData] = useState({});
  const [content, setContent] = useState();
  const [emailData, setEmailData] = useState(false);
  const { get, post, loading } = useFetch(
    "https://okcac-strapi.herokuapp.com/api/"
  );
  const [steps, setSteps] = useState(1);
  const [family, setFamily] = useState([]);
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const current = new Date();
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

  useEffect(() => {
    get("signup-form?populate[0]=signupStep.contentBlock").then((data) =>
      setContent(data.data.attributes.signupStep)
    );
  }, []);

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
    get(
      `club-members?filters[email][$eq]=${primary.values.email}&[fields]=email`
    ).then((data) => {
      if (data.data.length === 0 && primary.isValid) {
        setSteps(3);
        setEmailData(false);
      } else {
        setEmailData(true);
      }
    });
  };

  const handleStepThree = (event) => setSteps(4);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let purgeKeys = family.map((keys) => ({
      firstName: keys.firstName,
      lastName: keys.lastName,
    }));
    let combined = {
      ...primary.values,
      memberInfo: { family: [...purgeKeys] },
    };

    const submission = {
      data: combined,
    };

    post("club-members", submission).then((pay) =>
      stripePromise.then((stripe) => {
        stripe
          .redirectToCheckout({
            lineItems: [
              {
                price: "price_1KVNZIFf9B6igBMjIl6bCRgN",
                quantity: 1,
              },
            ],
            mode: "payment",
            successUrl: "https://parsecs.io/club-signup/success",
            cancelUrl: "https://parsecs.io/club-signup/payment-error",
          })
          .then((response) => {
            console.log(response.error);
          })
          .catch((error) => {
            console.log(error);
          });
      })
    );
  };

  return (
    <Loader active={loading ? true : false} /> && (
      <Container text textAlign="left">
        <Segment style={{ backgroundColor: "#F5F5F5" }} raised>
          <Label color="blue" ribbon="right">
            Currently: $<RenewalPrice />
          </Label>
          <Form
            style={{
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
            onSubmit={handleFormSubmit}
          >
            {steps === 1 && (
              <ClubBenefits onHandleStepOne={handleStepOne} content={content} />
            )}
            {steps === 2 && (
              <PrimaryMember
                primary={primary}
                onHandleBack={handleBack}
                onHandleStepTwo={handleStepTwo}
                modalOpen={modalOpen}
                setOpen={setModalOpen}
                setChecked={setChecked}
                checked={checked}
                emailData={emailData}
                loading={loading}
                content={content}
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
                content={content}
              />
            )}
            {steps === 4 && (
              <Checkout
                primary={primary}
                family={family}
                onHandleBack={handleBack}
                onHandleSubmit={handleFormSubmit}
                content={content}
              />
            )}
          </Form>
          <JoinClubSteps steps={steps} content={content} />
        </Segment>
        {data.length > 0 ? <Success data={data} content={content} /> : ""}
      </Container>
    )
  );
};

export default JoinClubForm;
