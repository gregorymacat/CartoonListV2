import React from 'react';
import LandingPage from './components/Landing/LandingPage.jsx';
import Navbar from './components/Nav/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
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
          <LandingPage toggleLogin={this.toggleLogin}/> :
          <Navbar/>
        }
      </React.Fragment>
    )
  }
}

export default App;