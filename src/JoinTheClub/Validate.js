const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be greater than 2 characters";
  } else if (!/^[A-Z]'?[- a-zA-Z]+$/i.test(values.firstName)) {
    errors.firstName = "Cannot contain non-standard characters!";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Must be greater than 2 characters";
  } else if (!/^[A-Z]'?[- a-zA-Z]+$/i.test(values.lastName)) {
    errors.lastName = "Cannot contain non-standard characters!";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(values.phone)
  ) {
    errors.phone = "Please use the (123) 222-3333 number format";
  }

  if (!values.liability) {
    errors.liability = "Required";
  } else if (values.liability === false) {
    errors.liability = "You must accept the liability release.";
  }

  return errors;
};

export default validate;
