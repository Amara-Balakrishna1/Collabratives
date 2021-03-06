import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { initializeIcons } from "@uifabric/icons";
import reducers from "./reducers";
import Header from "./container/LayoutContainer";
import Collabratives from "./container/CollabrativesContainer";
import Collabrative from "./container/CollabrativeContainer";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

initializeIcons(undefined, { disableWarnings: true });

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Header className="header" />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Collabratives} />
          <Route exact path="/collabrative" component={Collabrative} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

// export default Root

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
