import React from "react";

class ContentD extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <img
            className="mr-3"
            src={require("../components/comp.jpg")}
            alt="comp"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Business Banking Is Our Specialty</h5>
            We work hard for business owners like you, providing products with
            the features you need to help you achieve financial goals.
          </div>
        </li>
        <li className="media my-4">
          <img
            className="mr-3"
            src={require("../components/computer.jpg")}
            alt="computer"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              Main Street Lending Program Qualifications
            </h5>
            Congress passed this $2 trillion stimulus package to keep small
            businesses afloat through the COVID-19 crisis.
          </div>
        </li>
        <li className="media">
          <img
            className="mr-3"
            src={require("../components/comp.jpg")}
            alt="comp"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Leverage Our Knowledge Of CRE</h5>
            At Sunwest Bank, we understand the complexities involved in creating
            a solid commercial real estate loan.
          </div>
        </li>
      </ul>
    );
  }
}
export default ContentD;
