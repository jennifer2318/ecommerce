import React, { Component } from "react";
import "./default.sass";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./layouts/MainLayout";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
