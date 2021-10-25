import React from 'react';
import LandingPage from './components/Landing/LandingPage.jsx';

class App extends React.Component {
  constructor(props) {
    super();
  }

  render () {
    return (
      <React.Fragment>
        <LandingPage/>
      </React.Fragment>
    )
  }
}

export default App;