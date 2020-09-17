import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="iLfooter">
          <footer className="font-small bg-dark blue-grey">
            <div className="container text-center text-md-left mt-5 offset-md-2">
              <div className="row mt-3 dark-grey-text">
                <div className="col-md-3">
                  <a className="link footerLink" href="/">
                    <h5 className="title">
                      &copy; Copyright 2020 Sunwest Bank
                    </h5>
                  </a>
                </div>
                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h5 className="title text-white">Get to Know Us</h5>
                  <hr
                    className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60 }}
                  />
                  <p className="text-white">Phone number</p>
                  <p className="text-white">323-577-4473</p>
                  <p className="text-white">Address</p>{" "}
                  <p className="text-white">
                    2050 Main St Suite 300, Irvine, CA 92614
                  </p>
                </div>
                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h5 className="title text-white">Let Us Help You</h5>
                  <hr
                    className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60 }}
                  />
                  <p className="text-white">FAQ</p>{" "}
                  <p className="text-white">Contact Us</p>
                </div>
                <div className="col-md-3 icons">
                  <div className="btn-wrapper profile text-left"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
