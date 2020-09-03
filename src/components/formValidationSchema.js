import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, "Your name is too short")
    .max(17, "Too Long!")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(5, "Your last name is too short")
    .max(27, "Too Long!")
    .required("Please enter your last name"),
  email: Yup.string()
    .label("Email")
    .matches(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})/,
      "Enter a valid email"
    )
    .required("Please enter your email"),
  phoneNumber: Yup.string()
    .min(10)
    .max(12)
    .required("Please enter your phone number"),
  loanAmount: Yup.number()
    .min(1, "value most be greater than 0")
    .required("Please enter your loan amount"),
});

export { formValidationSchema };
