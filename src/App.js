import React, { Component } from "react";

// container
import { AnalysisPage } from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";

// router
import { BrowserRouter, Switch } from "react-router-dom";
import { MainLayout, LayoutRoute, EmptyLayout } from "./components/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute
            exact
            path="/"
            layout={EmptyLayout}
            component={LoginPage}
          />
          <LayoutRoute
            path="/dashboard/analysis"
            layout={MainLayout}
            component={AnalysisPage}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
