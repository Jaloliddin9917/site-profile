import React from 'react';
import "./App.css"
import Home from './pages/home/home';
import Layout from "./components/Layout"
import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
