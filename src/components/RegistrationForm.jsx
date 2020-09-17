import React from "react";
import { Form, FormGroup, Button } from "reactstrap";
import { Formik, Field } from "formik";
import swal from "sweetalert";
import { formValidationSchema } from "./formValidationSchema";
import "./RegistrationsForm.css";
import axios from "axios";
import Content from "./Content";

class RegistrationForm extends React.Component {
  state = {
    registerForm: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      loanAmount: "",
    },
  };

  handleSubmit = (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      loanAmount: values.loanAmount,
    };
    this.setState({
      registerForm: payload,
    });
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { payload })
      .then(this.onCreateSuccess)
      .catch(this.onCreateError);
  };

  onCreateSuccess = () => {
    swal(
      "Thank you!",
      "We’ve received your information, a relationship manager will be in touch shortly. ",
      "success"
    );
    this.props.history.push("/");
  };

  onCreateError = () => {
    const options = {
      title: "Information Request Error",
      text: "Try again !",
      icon: "warning",
      buttons: {
        login: { value: true, text: "Try again", className: "bg-primary" },
      },
    };
    swal(options).then((value) => {
      if (!value) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Content></Content>
        </div>
        <div className="container-register d-flex justify-content-center">
          <div className="d-flex justify-content-center reg-card ">
            <div className="card register_card">
              <div className="card-header register_header">
                <h2>Sunwest bank lending</h2>
                <div className="d-flex justify-content-end social_icon"></div>
              </div>
              <div className="card-body loginFields">
                <div className="card-body">
                  <h5 className="text-center forgot-text py-3">
                    To inquire about a Sunwest Bank loan, please provide the
                    following information.
                  </h5>
                  <Formik
                    enableReinitialize={true}
                    validationSchema={formValidationSchema}
                    initialValues={this.state.registerForm}
                    onSubmit={this.handleSubmit}
                    className="align-self-center"
                  >
                    {(props) => {
                      const {
                        values,
                        handleSubmit,
                        isValid,
                        isSubmitting,
                        errors,
                        touched,
                      } = props;
                      return (
                        <Form
                          onSubmit={handleSubmit}
                          className={"col-md-15 pt-4"}
                        >
                          <FormGroup>
                            <div className="form-group ">
                              <label className="form_text mr-2">
                                First Name
                              </label>
                              {errors.firstName && touched.firstName && (
                                <span className="input-feedback text-danger">
                                  {errors.firstName}
                                </span>
                              )}
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                </div>
                                <Field
                                  name="firstName"
                                  type="text"
                                  values={values.firstName}
                                  placeholder="Enter your first name"
                                  autoComplete="off"
                                  className={
                                    errors.firstName && touched.firstName
                                      ? "form-control error"
                                      : "form-control"
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group ">
                              <label className="form_text mr-2">
                                Last Name
                              </label>
                              {errors.lastName && touched.lastName && (
                                <span className="input-feedback text-danger">
                                  {errors.lastName}
                                </span>
                              )}
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                </div>
                                <Field
                                  name="lastName"
                                  type="text"
                                  values={values.lastName}
                                  placeholder="Enter your last name"
                                  autoComplete="off"
                                  className={
                                    errors.lastName && touched.lastName
                                      ? "form-control error"
                                      : "form-control"
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group forgot-email">
                              <label className="form_text mr-2">Email</label>
                              {errors.email && touched.email && (
                                <span className="input-feedback text-danger">
                                  {errors.email}
                                </span>
                              )}
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                </div>
                                <Field
                                  name="email"
                                  type="text"
                                  values={values.email}
                                  placeholder="Enter your e-mail address"
                                  autoComplete="off"
                                  className={
                                    errors.email && touched.email
                                      ? "form-control error"
                                      : "form-control"
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group ">
                              <label className="form_text mr-2">
                                Phone Number
                              </label>
                              {errors.phoneNumber && touched.phoneNumber && (
                                <span className="input-feedback text-danger">
                                  {errors.phoneNumber}
                                </span>
                              )}
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                </div>
                                <Field
                                  name="phoneNumber"
                                  type="text"
                                  values={values.phoneNumber}
                                  placeholder="Enter your phone number"
                                  autoComplete="off"
                                  className={
                                    errors.phoneNumber && touched.phoneNumber
                                      ? "form-control error"
                                      : "form-control"
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group ">
                              <label className="form_text mr-2">
                                Loan amount
                              </label>
                              {errors.loanAmount && touched.loanAmount && (
                                <span className="input-feedback text-danger">
                                  {errors.loanAmount}
                                </span>
                              )}
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                  </span>
                                </div>
                                <Field
                                  name="loanAmount"
                                  type="text"
                                  values={values.loanAmount}
                                  placeholder="Enter your desirable loan amount"
                                  autoComplete="off"
                                  className={
                                    errors.loanAmount && touched.loanAmount
                                      ? "form-control error"
                                      : "form-control"
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <div className="ml-1 forgot_reset">
                            <Button
                              type="submit"
                              className="btn btn-submit"
                              disabled={!isValid || isSubmitting}
                            >
                              Submit
                            </Button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default RegistrationForm;
