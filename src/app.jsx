import React from 'react';
import SignupPage from './components/Signup/SignupPage.jsx';
import HomePage from './components/Home/HomePage.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      pageSelected: 'SignupPage',
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render () {
    return (
      <React.Fragment>
        {
          this.state.isLoggedIn === false ?
          <SignupPage toggleLogin={this.toggleLogin}/> :
          <HomePage/>
        }
      </React.Fragment>
    )
  }
}

export default App;