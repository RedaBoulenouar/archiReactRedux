import React, { Component, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./Containers/User/UserContainer";
import { store, history } from "./Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router history={history}>
            <Switch>
              <Route path="/user" component={User} />
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    );
  }
}

export default App;
