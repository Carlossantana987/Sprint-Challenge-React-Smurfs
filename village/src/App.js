import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
// import "./App.css";
import styled from "styled-components";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const AppPage = styled.div`
  background: dodgerBlue;
`;

const NavBar = styled.div`
  margin:10px 0px 0px 
  display: flex;
  justify-content: space-around;
`;
const PageBody = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  smurfAddRequest = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppPage>
        <NavBar>
          <NavLink exact to="/" className="link">
            Smurf
          </NavLink>
          <NavLink to="/smurfForm" className="link">
            Smurfs Form
          </NavLink>
        </NavBar>
        <PageBody>
          <Route
            path="/smurfForm"
            render={() => <SmurfForm smurfAddRequest={this.smurfAddRequest} />}
          />
          <Route
            exact
            path="/"
            render={() => <Smurfs smurfs={this.state.smurfs} />}
          />
        </PageBody>
      </AppPage>
    );
  }
}

export default App;
