import React from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import "./App.scss";
import Start from "./components/pages/start";
import Header from "./components/header/header";

const mapState = (state: any) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

type AppProps = Props;

const App: React.FC<AppProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Start />
        </Route>
      </Switch>
    </Router>
  );
};

export default connector(App);
