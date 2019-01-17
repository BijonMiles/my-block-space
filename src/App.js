import React, { Component, Link } from 'react';
import Profile from './components/Profile.jsx';
import Signin from './components/Signin.jsx';
import Navbar from './components/Navbar.jsx';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
  loadUserData,
  lookupProfile
} from 'blockstack';
import { Switch, Route } from 'react-router-dom'
import './App.css';


export default class App extends Component {

  constructor(props) {
    super(props)

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: undefined
    }

    if (isSignedIn) {
      this.loadPerson();
    }
  }

  checkSignedInStatus = () => {
    if (isUserSignedIn()) {
      return true;
    } else if (isSignInPending()) {
      handlePendingSignIn().then(function (userData) {
        this.props.history.push('/')
      })
      return false;
    }
  }

  loadPerson = () => {
    let username = loadUserData().username
    let userId = username.slice(0, -11);
    lookupProfile(username).then((person) => {
      this.setState({ person })
    })
    this.props.history.push(`/${userId}`)
  }

  handleSignIn = (e) => {
    e.preventDefault();
    const origin = window.location.origin
    console.log(origin)
    redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
  }


  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }

  render() {
    return (
      <div className="App">
        {!this.state.isSignedIn ?
          <Signin handleSignIn={this.handleSignIn} />
          :
          (<div><Navbar />
          <Switch>
            <Route
              path='/:username?'
              render={
                props => <Profile  
                person={this.state.person}
                {...props} />
              }
            />
          </Switch></div>)
        }
      </div>
    );
  }
}
