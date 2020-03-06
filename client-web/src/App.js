import React from 'react';
import AppContext from './context/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Default from "./views/layouts/DefaultLayout";
import HomePage from "./views/pages/Home";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Route exact path="/" component={() => <Default page={<HomePage />} />} />
        </Router>
      </AppContext.Provider>
    );
  }

}

export default App;