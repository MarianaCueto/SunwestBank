import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div root="main">
            <Route path="/lending" exact component={RegistrationForm} />
            <Route path="/content" component={Content} />
            <Route path="/" exact component={Jumbo} />
          </div>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
