import React, { Component } from 'react';
import MyProfile from './components/MyProfile.jsx';
import Signin from './components/Signin.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  loadUserData,
  lookupProfile,
  Person
} from 'blockstack';
import { Switch, Route } from 'react-router-dom'
import './App.css';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';


export default class App extends Component {

  constructor(props) {
    super(props)

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        },
        description() {
          return 'No description'
        }
      },
      username: null
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

  loadPerson = async () => {
    console.log('LOAD PERSON STARTS')
    let userData = loadUserData()
    let person = await new Person(userData.profile)
    console.log(person)
    let username = await userData.username
    // let urlusername = username.slice(0, -11);
    this.setState({ person, username })
    this.props.history.push(`/${username}`)
  }

  handleSignIn = (e) => {
    e.preventDefault();
    const origin = window.location.origin
    console.log(origin)
    redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
  }

  searchFor = (name) => {
    this.props.history.push(`/users/${name}`)
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        // not sure what to do with user data
        window.location = window.location.origin;
      });
    }
  }

  componentDidMount() {
    this.loadPerson()
  }

  render() {
    return (
      <div className="App">
        {!this.state.isSignedIn ?
          <Signin handleSignIn={this.handleSignIn} />
          :
          (<div><Navbar
            searchFor={this.searchFor}
            person={this.state.person}
            username={this.state.username}
           />
          <Switch>
            <Route
              path='/users/:username'
              render={
                props => <Profile
                  person={this.state.person}
                  username={this.state.username}
                  {...props} />
              }
            />
            <Route
              path='/:username'
              render={
                props => <MyProfile  
                person={this.state.person}
                username={this.state.username}
                {...props} />
              }
            />
            
          </Switch></div>)
        }
      </div>
    );
  }
}
