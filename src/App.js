import React, { Component } from 'react';
import Firebase from './firebase.js';

class App extends Component {

  constructor() {
    super();
    this.signedIn();
    this.state = {
      'signinEmail': '',
      'signinPassword': '',
      'signupEmail': '',
      'signupPassword': ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(this.state.signupEmail, this.state.signupPassword).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      return null;
    });
    this.signedIn();
  }

  handleSignin(e) {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(this.state.signinEmail, this.state.signinPassword).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      return null;
    });
    this.signedIn();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signedIn() {
    if (Firebase.auth().currentUser) {
      return this.props.history.push('/characters');
    }
  }

  render() {
    return (
      <div className="App font-sans leading-normal p-8" >
        <div className="container mx-auto flex-none sm:flex justify-center">
          <h1>noobtracker</h1>

          <div className="rounded bg-gray-100 flex-auto shadow-lg w-3/4 mr-12 p-4">
            <h2 className="rounded rounded-b-none text-gray-100 text-2xl font-light uppercase px-6 py-4 bg-gray-800">Sign In</h2>
            <form onSubmit={this.handleSignin}>
              <input name="signinEmail" type="text" placeholder="email" 
                onChange={this.handleChange} value={this.state.signinEmail}
                required className="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none mb-2" />
              <input name="signinPassword" type="password" placeholder="Password" 
                onChange={this.handleChange} value={this.state.signinPassword}
                required className="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none mb-2" />
              <input type="submit" value="Sign In" 
                className="rounded float-right px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-gray-200 hover:bg-blue-600 md:text-lg xl:text-base border border-solid border-blue-600 hover:border-none text-blue-600 hover:text-white font-semibold leading-tight" />
            </form >
          </div>

          <div className="rounded bg-gray-100 flex-auto shadow-lg w-3/4 mr-12 p-4">
            <h2 className="rounded rounded-b-none text-gray-100 text-2xl font-light uppercase px-6 py-4 bg-gray-800">Sign Up</h2>
            <form onSubmit={this.handleSignup}>
              <input name="signupEmail" type="text" placeholder="email" 
                onChange={this.handleChange} value={this.state.signupEmail}
                required className="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none mb-2" />
              <input name="signupPassword" type="password" placeholder="Password" 
                onChange={this.handleChange} value={this.state.signupPassword}
                required className="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none mb-2" />
              <input type="submit" value="Sign Up" 
                className="rounded float-right px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-gray-200 hover:bg-blue-600 md:text-lg xl:text-base border border-solid border-blue-600 hover:border-none text-blue-600 hover:text-white font-semibold leading-tight" />
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default App;