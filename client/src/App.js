import "./App.css";
import React from "react";
import Navbar from "./common_components/Navbar";
import Index from "./common_components/Index";
import IndexCities from "./common_components/IndexCities";
import Footer from "./common_components/Footer";
import Lists from "./common_components/Lists";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
          <IndexCities />
        </Route>
        <Route exact path="/list">
          <Lists />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
