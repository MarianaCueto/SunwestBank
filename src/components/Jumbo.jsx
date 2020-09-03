import React from "react";
import RegistrationForm from "./RegistrationForm";
import Content from "./Content";

class Jumbo extends React.Component {
  render() {
    return (
      <div className="container">
        <Content></Content>
        <div className="row">
          <div className="col-md-4">
            <h2>Business Banking Is Our Specialty</h2>
            <p>
              We work hard for business owners like you, providing products with
              the features you need to help you achieve your financial goals.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Main Street Lending Program Qualifications </h2>
            <p>
              Congress passed this $2 trillion stimulus package to keep small
              businesses afloat through the COVID-19 crisis.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Leverage Our Knowledge Of CRE</h2>
            <p>
              At Sunwest Bank, we understand the complexities involved in
              creating a solid commercial real estate loan.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
            </p>
          </div>
        </div>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}
export default Jumbo;
