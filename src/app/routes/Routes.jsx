import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../dashboard/Dashboard";
import RepositoryList from "../Repository/RepositoryList";
import Authentication from "../authentication/Authentication";

const Routes = () => {
    return (
      <Router>
        <div>
          <Route path="/" component={Authentication} />
          <PrivateRoutes path="/dashboard" component={RepositoryList} />
        </div>
      </Router>
    );
};

export default Routes;
