import React from 'react';
import SignupPage from './components/Signup/SignupPage.jsx';
import HomePage from './components/Home/HomePage.jsx';
import ListPage from './components/List/ListPage.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      pageSelected: 'SignupPage',
    }
    this.toggleLogin = this.toggleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      pageSelected: 'HomePage',
    });
  }

  handleClick(event) {
    console.log(event.target.id)
    if (event.target.id === 'Home' && this.state.pageSelected !== 'Home') {
      this.setState({
        pageSelected: 'HomePage',
      });
    } else if (event.target.id === 'List' && this.state.pageSelected !== 'ListPage') {
      this.setState({
        pageSelected: 'ListPage',
      })
    }
  }

  render () {
    let showPage;

    if (!this.state.isLoggedIn) {
      showPage = <SignupPage toggleLogin={this.toggleLogin}/>;
    } else {
      switch (this.state.pageSelected) {
        case 'HomePage':
          showPage = <HomePage click={this.handleClick}/>;
          break;
        case 'ListPage':
          showPage = <ListPage click={this.handleClick}/>;
          break;
        default:
          showPage = <SignupPage toggleLogin={this.toggleLogin}/>;
      }
    }

    return (
      <React.Fragment>
        { showPage }
      </React.Fragment>
    )
  }
}

export default App;